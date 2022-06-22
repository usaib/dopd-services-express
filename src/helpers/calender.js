const { google } = require("googleapis");
import dotenv from "dotenv";
const fs = require("fs");
const readline = require("readline");
import { appointment_histories } from "../models";

const SCOPES = process.env.SCOPES;

dotenv.config();
const TOKEN_PATH = "token.json";

module.exports = async function ({ attendeesEmails, event, id }) {
	// Load client secrets from a local file.
	fs.readFile(process.env.SECRET_FILE, (err, content) => {
		if (err) return console.log("Error loading client secret file:", err);
		// Authorize a client with credentials, then call the Google Calendar API.
		console.log(JSON.parse(content));
		authorize(JSON.parse(content), insertEvent);
	});

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
			"https://loud-buttons-hang-103-196-161-95.loca.lt/appointment/getToken"
		);

		// Check if we have previously stored a token.
		fs.readFile(TOKEN_PATH, (err, token) => {
			console.log(err);
			if (err) return getAccessToken(oAuth2Client, callback);
			oAuth2Client.setCredentials(JSON.parse(token));
			callback(oAuth2Client, id);
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
			oAuth2Client.getToken(decodeURIComponent(code), (err, token) => {
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
		calendar.events.list(
			{
				calendarId: process.env.GOOGLE_CALENDAR_ID,
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

	const insertEvent = (auth, id) => {
		const calendar = google.calendar({ version: "v3", auth });
		console.log("it is", process.env.GOOGLE_CALENDAR_ID, auth, event);
		const response = calendar.events.insert(
			{
				auth: auth,
				calendarId: process.env.GOOGLE_CALENDAR_ID,
				resource: event,
				conferenceDataVersion: 1
			},
			async (err, response) => {
				if (err) return console.log("The API returned an error: " + err);

				const {
					config: {
						data: { summary, location, start, end, attendees }
					},
					data: { conferenceData }
				} = response;
				const { uri } = conferenceData.entryPoints[0];
				console.log(response);
				console.log(
					`📅 Calendar event created: ${summary} at ${location}, from ${
						start.dateTime
					} to ${end.dateTime}, attendees:\n${attendees
						.map((person) => `🧍 ${person.email}`)
						.join("\n")} \n 💻 Join conference call link: ${uri}`
				);
				const resp = await appointment_histories.update(
					{ appointmentLink: uri },
					{
						where: {
							id
						}
					}
				);
				return uri;
			}
		);
		return response;
	};
};
