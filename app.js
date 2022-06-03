import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import Auth from "./src/routes/auth";
import User from "./src/routes/user";
import Appointment from "./src/routes/appointment";
import diagnosedDisease from "./src/routes/diagnosedDisease";
import doctor from "./src/routes/doctor";
import doctorAvailability from "./src/routes/doctorAvailability";
const { google } = require("googleapis");

dotenv.config();
require("./src/config/sequelize");
const serviceAccount = require("./digitalopd-a9a772c850fc.json");
const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);

const SCOPES = "https://www.googleapis.com/auth/calendar";
const GOOGLE_PRIVATE_KEY = serviceAccount.private_key;
const GOOGLE_CLIENT_EMAIL = serviceAccount.client_email;
const GOOGLE_PROJECT_NUMBER = "64977015729";
const GOOGLE_CALENDAR_ID =
	"hnrtqvcti5a1v9e9742d3kl7tg@group.calendar.google.com";
app.use(cors());
app.use(bodyParser.json());
const fs = require("fs");
const readline = require("readline");
// const { google } = require("googleapis");

// If modifying these scopes, delete token.json.
// const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

// Load client secrets from a local file.
fs.readFile(
	"./client_secret_64977015729-utbs6316i2ihd2k056sv6o2f7d5ffhuh.apps.googleusercontent.com.json",
	(err, content) => {
		if (err) return console.log("Error loading client secret file:", err);
		// Authorize a client with credentials, then call the Google Calendar API.
		console.log(JSON.parse(content));

		authorize(JSON.parse(content), listEvents);
	}
);

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
	const { client_secret, client_id, redirect_uris } = credentials.web;
	const oAuth2Client = new google.auth.OAuth2(
		client_id,
		client_secret,
		"https://a494-27-96-92-98.ngrok.io"
	);

	// Check if we have previously stored a token.
	fs.readFile(TOKEN_PATH, (err, token) => {
		if (err) return getAccessToken(oAuth2Client, callback);
		oAuth2Client.setCredentials(JSON.parse(token));
		callback(oAuth2Client);
	});
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
	const authUrl = oAuth2Client.generateAuthUrl({
		access_type: "offline",
		scope: SCOPES
	});
	console.log("Authorize this app by visiting this url:", authUrl);
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question("Enter the code from that page here: ", (code) => {
		rl.close();
		oAuth2Client.getToken(code, (err, token) => {
			if (err) return console.error("Error retrieving access token", err);
			oAuth2Client.setCredentials(token);
			// Store the token to disk for later program executions
			fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
				if (err) return console.error(err);
				console.log("Token stored to", TOKEN_PATH);
			});
			callback(oAuth2Client);
		});
	});
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
	const calendar = google.calendar({ version: "v3", auth });
	var event = {
		summary: "Google I/O 2015",
		location: "800 Howard St., San Francisco, CA 94103",
		description: "A chance to hear more about Google's developer products.",
		start: {
			dateTime: new Date().toISOString(),
			timeZone: "America/Los_Angeles"
		},
		end: {
			dateTime: "2022-06-28T17:00:00-07:00",
			timeZone: "America/Los_Angeles"
		},
		recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
		attendees: [{ email: "usaibkhan777@gmail.com" }],
		reminders: {
			useDefault: false,
			overrides: [
				{ method: "email", minutes: 24 * 60 },
				{ method: "popup", minutes: 10 }
			]
		}
	};

	// calendar.events.insert(
	// 	{
	// 		auth: auth,
	// 		calendarId: GOOGLE_CALENDAR_ID,
	// 		resource: event
	// 	},
	// 	function (err, event) {
	// 		if (err) {
	// 			console.log(
	// 				"There was an error contacting the Calendar service: " + err
	// 			);
	// 			return;
	// 		}
	// 		console.log("Event created: %s", event.htmlLink);
	// 	}
	// );
	calendar.events.list(
		{
			calendarId: GOOGLE_CALENDAR_ID,
			timeMin: new Date().toISOString(),
			maxResults: 10,
			singleEvents: true,
			orderBy: "startTime"
		},
		(err, res) => {
			if (err) return console.log("The API returned an error: " + err);
			const events = res.data.items;
			if (events.length) {
				console.log("Upcoming 10 events:");
				events.map((event, i) => {
					const start = event.start.dateTime || event.start.date;
					console.log(`${start} - ${event.summary}`);
				});
			} else {
				console.log("No upcoming events found.");
			}
		}
	);
}
const jwtClient = new google.auth.JWT(
	GOOGLE_CLIENT_EMAIL,
	null,
	GOOGLE_PRIVATE_KEY,
	SCOPES
);

const calendar = google.calendar({
	version: "v3",
	project: GOOGLE_PROJECT_NUMBER,
	auth: jwtClient
});

app.get("/", (req, res) => {
	console.log(req.body);
	calendar.events.list(
		{
			calendarId: encodeURIComponent(GOOGLE_CALENDAR_ID),
			timeMin: new Date().toISOString(),
			maxResults: 10,
			singleEvents: true,
			orderBy: "startTime"
		},
		(error, result) => {
			if (error) {
				console.log(error);
				res.send(JSON.stringify({ error: error }));
			} else {
				if (result.data.items.length) {
					res.send(JSON.stringify({ events: result.data.items }));
				} else {
					res.send(JSON.stringify({ message: "No upcoming events found." }));
				}
			}
		}
	);
});
app.use("/auth", Auth);
app.use("/user", User);
app.use("/appointment", Appointment);
app.use("/diagnosedDisease", diagnosedDisease);
app.use("/doctor", doctor);
app.use("/doctorAvailability", doctorAvailability);

module.exports = app;
