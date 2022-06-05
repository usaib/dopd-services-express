const { google } = require("googleapis");
import dotenv from "dotenv";
const fs = require("fs");
const readline = require("readline");

const SCOPES = process.env.SCOPES;

dotenv.config();

module.exports = async function (
	attendeesEmails = [
		{ email: "shehzerabbasi621@gmail.com" },
		{ email: "noors.mah.coll@gmail.com" },
		{ email: "syedainsharahnaveed@gmail.com" }
	],
	event = {
		summary: "Online Appointment",
		location: "Virtual / Google Meet",
		description: "With Doctor Anees Allana",
		start: {
			dateTime: "2022-06-05T07:00:00",
			timeZone: "America/Los_Angeles"
		},
		end: {
			dateTime: "2022-06-05T08:00:00",
			timeZone: "America/Los_Angeles"
		},
		attendees: attendeesEmails,
		reminders: {
			useDefault: false,
			overrides: [
				{ method: "email", minutes: 24 * 60 },
				{ method: "popup", minutes: 30 }
			]
		},
		conferenceData: {
			createRequest: {
				conferenceSolutionKey: {
					type: "hangoutsMeet"
				},
				requestId: "online-appointment-dopd"
			}
		}
	}
) {
	// Load client secrets from a local file.
	fs.readFile(process.env.SECRET_FILE, (err, content) => {
		if (err) return console.log("Error loading client secret file:", err);
		// Authorize a client with credentials, then call the Google Calendar API.

		return authorize(JSON.parse(content), insertEvent);
	});

	/**
	 * Create an OAuth2 client with the given credentials, and then execute the
	 * given callback function.
	 * @param {Object} credentials The authorization client credentials.
	 * @param {function} callback The callback to call with the authorized client.
	 */
	function authorize(credentials, callback) {
		const { client_secret, client_id } = credentials.web;
		const oAuth2Client = new google.auth.OAuth2(
			client_id,
			client_secret,
			"https://a494-27-96-92-98.ngrok.io"
		);

		// Check if we have previously stored a token.
		const data = fs.readFile(process.env.TOKEN_PATH, (err, token) => {
			console.log(err);
			if (err) return getAccessToken(oAuth2Client, callback);
			oAuth2Client.setCredentials(JSON.parse(token));
			return callback(oAuth2Client);
		});
		console.log("Authdata", data);
		return data;
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

	const insertEvent = (auth) => {
		const calendar = google.calendar({ version: "v3", auth });
		console.log("it is", process.env.GOOGLE_CALENDAR_ID, auth, event);
		return event;
		const response = calendar.events.insert(
			{
				auth: auth,
				calendarId: process.env.GOOGLE_CALENDAR_ID,
				resource: event,
				conferenceDataVersion: 1
			},
			(err, response) => {
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
				return uri;
			}
		);
		return response;
	};
};
