/**
 * @file
 * Example 001: Use embedded signing
 * @author DocuSign
 */

const path = require("path");
const {
	sendEnvelopeForEmbeddedSigning
} = require("../Services/embeddedSigning");
const validator = require("validator");
const { listEnvelope } = require("../Services/listEnvelopes");
const { getDocuments } = require("../Services/listEnvelopeById");
const { getDocument } = require("../Services/getDocument");

const authData = {
	_debug_prefix: "DSAuthCodeGrant",
	_accessToken:
		"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAAdO43kFbaSAgAALQRRtNW2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3EgABAAAACwAAAGludGVyYWN0aXZlMACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.uX9wCmcGnUf3K58SipJW243LEYMx4NGSrkp4SxgMPSI8p55JJsnqZe11nq7iUXaF4GrxWIwP5B6OoDlS3IyoP-mNAYI-cnn96RkyxpA750NoSqd0Yh0CID5lGzlSZDQnxKVtKs97Yafqnmoa5wAZktLpAM4PLRx_BpRWKlV6QY0K-GhEwtsxI_9Hv045XM_JrDsQi3yaYfy6ugGFk-OpOy4DCf0XR6KGLfncr_lGJ2IrMpfTbRKPSOCIyEh8FgK3WfNktAXpW9-YZ6LRkktib3WwZ-xO3_CYepEHFyZMeOfiRoOzftHXeyEi3iIQKW-1MfmFE9ck59r0v3lpOS6Hag",
	_refreshToken:
		"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAgABwAAdO43kFbaSAgAAPRSMCNu2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3MACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.ZgXQFxyB_dbJXJ7CIO_aUxk9T8N2J0DtG5nIAFjFZ56DDic0VZjZjm_gsFBv3LevblprlEcu_dGBeR57b_GTz2i1pyY9jqTdSbc-pWzX__5PymnSLHl9ami2wc80sJ3jOezgtII5beRvCY4y8dePVdAh-lgnD68aPyuSSwGqSjT6G00HYMezdi-pl1DC0bYpHipnzjma_8obWGSEpIQJ5Hj9_BC8BahPtkjkQbemj-24h-EFeUorWWTdATfAapaxxdQ-5D7lqGBp9LuzYA2l2FUAAZZF2cB-iM9lHTfD5YCCDbmabgVlqHEOINYFzF-VRRylUaB9srJ7e2EVj8M3tg",
	_tokenExpiration: "2022-06-25T17:51:06.306Z",
	_debug: true
};
// const dsConfig = require("../../../config/index.js").config;

const eg001EmbeddedSigning = exports;

/**
 * Create the envelope, the embedded signing, and then redirect to the DocuSign signing
 * @param {object} req Request obj
 * @param {object} res Response obj
 */
eg001EmbeddedSigning.createController = async (req, res) => {
	// Step 1. Check the token
	// At this point we should have a good token. But we
	// double-check here to enable a better UX to the user.
	// const tokenOK = req.dsAuth.checkToken(minimumBufferMin);
	// if (!tokenOK) {
	// 	req.flash("info", "Sorry, you need to re-authenticate.");
	// 	// Save the current operation so it will be resumed after authentication
	// 	req.dsAuth.setEg(req, eg);
	// 	res.redirect(mustAuthenticate);
	// }

	// Step 2. Call the worker method
	const { body } = req;

	const args = {
		accessToken:
			"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAAdO43kFbaSAgAALQRRtNW2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3EgABAAAACwAAAGludGVyYWN0aXZlMACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.uX9wCmcGnUf3K58SipJW243LEYMx4NGSrkp4SxgMPSI8p55JJsnqZe11nq7iUXaF4GrxWIwP5B6OoDlS3IyoP-mNAYI-cnn96RkyxpA750NoSqd0Yh0CID5lGzlSZDQnxKVtKs97Yafqnmoa5wAZktLpAM4PLRx_BpRWKlV6QY0K-GhEwtsxI_9Hv045XM_JrDsQi3yaYfy6ugGFk-OpOy4DCf0XR6KGLfncr_lGJ2IrMpfTbRKPSOCIyEh8FgK3WfNktAXpW9-YZ6LRkktib3WwZ-xO3_CYepEHFyZMeOfiRoOzftHXeyEi3iIQKW-1MfmFE9ck59r0v3lpOS6Hag",
		basePath: "https://demo.docusign.net/restapi",
		accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
		envelopeArgs: {
			signerEmail: "usaibkhan777@gmail.com",
			signerName: "Usaib Khan",
			signerClientId: 1000,
			dsReturnUrl: "http://localhost:3000/ds-return",
			dsPingUrl: "http://localhost:3000/",
			docFile:
				"/home/usaibkhan/Desktop/Projects/FYP/DOPD-services-express/backend/output.pdf"
		}
	};
	// const args = {
	// 	accessToken: req.user.accessToken,
	// 	basePath: req.session.basePath,
	// 	accountId: req.session.accountId,
	// 	envelopeArgs: envelopeArgs
	// };
	let results = null;

	try {
		results = await sendEnvelopeForEmbeddedSigning(args);
	} catch (error) {
		const errorBody = error && error.response && error.response.body;
		// we can pull the DocuSign error code and message from the response body
		const errorCode = errorBody && errorBody.errorCode;
		const errorMessage = errorBody && errorBody.message;
		// In production, may want to provide customized error messages and
		// remediation advice to the user.
		res.render("pages/error", { err: error, errorCode, errorMessage });
	}
	if (results) {
		console.log(results);
		res.send(results);
		// Redirect the user to the embedded signing
		// Don't use an iFrame!
		// State can be stored/recovered using the framework's session or a
		// query parameter on the returnUrl (see the makeRecipientViewRequest method)
		// res.redirect(results.redirectUrl);
	}
};

eg001EmbeddedSigning.listController = async (req, res) => {
	// Step 1. Check the token
	// At this point we should have a good token. But we
	// double-check here to enable a better UX to the user.
	// Step 2. Call the worker method
	const args = {
		accessToken:
			"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAAdO43kFbaSAgAALQRRtNW2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3EgABAAAACwAAAGludGVyYWN0aXZlMACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.uX9wCmcGnUf3K58SipJW243LEYMx4NGSrkp4SxgMPSI8p55JJsnqZe11nq7iUXaF4GrxWIwP5B6OoDlS3IyoP-mNAYI-cnn96RkyxpA750NoSqd0Yh0CID5lGzlSZDQnxKVtKs97Yafqnmoa5wAZktLpAM4PLRx_BpRWKlV6QY0K-GhEwtsxI_9Hv045XM_JrDsQi3yaYfy6ugGFk-OpOy4DCf0XR6KGLfncr_lGJ2IrMpfTbRKPSOCIyEh8FgK3WfNktAXpW9-YZ6LRkktib3WwZ-xO3_CYepEHFyZMeOfiRoOzftHXeyEi3iIQKW-1MfmFE9ck59r0v3lpOS6Hag",
		basePath: "https://demo.docusign.net/restapi",
		accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06"
	};
	let results = null;

	try {
		results = await listEnvelope(args);
	} catch (error) {
		const errorBody = error && error.response && error.response.body;
		// we can pull the DocuSign error code and message from the response body
		const errorCode = errorBody && errorBody.errorCode;
		const errorMessage = errorBody && errorBody.message;
		// In production, may want to provide customized error messages and
		// remediation advice to the user.
		res.render("pages/error", { err: error, errorCode, errorMessage });
	}
	if (results) {
		res.status(200).send({
			title: "List envelopes results",
			h1: "Envelopes updated",
			message: `Results from the Envelopes::listStatusChanges method:`,
			json: results.envelopes
		});
	}
};
eg001EmbeddedSigning.listEnvelopeById = async (req, res) => {
	// Step 1. Check the token
	// At this point we should have a good token. But we
	// double-check here to enable a better UX to the user.
	// Step 2. Call the worker method
	const args = {
		accessToken:
			"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAAdO43kFbaSAgAALQRRtNW2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3EgABAAAACwAAAGludGVyYWN0aXZlMACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.uX9wCmcGnUf3K58SipJW243LEYMx4NGSrkp4SxgMPSI8p55JJsnqZe11nq7iUXaF4GrxWIwP5B6OoDlS3IyoP-mNAYI-cnn96RkyxpA750NoSqd0Yh0CID5lGzlSZDQnxKVtKs97Yafqnmoa5wAZktLpAM4PLRx_BpRWKlV6QY0K-GhEwtsxI_9Hv045XM_JrDsQi3yaYfy6ugGFk-OpOy4DCf0XR6KGLfncr_lGJ2IrMpfTbRKPSOCIyEh8FgK3WfNktAXpW9-YZ6LRkktib3WwZ-xO3_CYepEHFyZMeOfiRoOzftHXeyEi3iIQKW-1MfmFE9ck59r0v3lpOS6Hag",
		basePath: "https://demo.docusign.net/restapi",
		accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
		envelopeId: req.body.envelopeId
	};
	let results = null;

	try {
		results = await getDocuments(args);
	} catch (error) {
		const errorBody = error && error.response && error.response.body;
		// we can pull the DocuSign error code and message from the response body
		const errorCode = errorBody && errorBody.errorCode;
		const errorMessage = errorBody && errorBody.message;
		// In production, may want to provide customized error messages and
		// remediation advice to the user.
		res.render("pages/error", { err: error, errorCode, errorMessage });
	}
	if (results) {
		res.status(200).send({
			title: "List envelopes by Id results",
			json: results.envelopeDocuments
		});
	}
};

eg001EmbeddedSigning.downloadDocument = async (req, res) => {
	// Step 1. Check the token
	// At this point we should have a good token. But we
	// double-check here to enable a better UX to the user.

	// Step 2. Call the worker method
	// const args = {
	// 	accessToken: req.user.accessToken,
	// 	basePath: req.session.basePath,
	// 	accountId: req.session.accountId,
	// 	documentId: validator.escape(req.body.docSelect),
	// 	envelopeDocuments: envelopeDocuments
	// };
	const args = {
		accessToken:
			"eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQsAAAABAAUABwAAdO43kFbaSAgAALQRRtNW2kgCAHR3N-SUJ5lGl6XYFObSeXQVAAEAAAAYAAEAAAAFAAAADQAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3IgAkAAAAY2M0M2MyYzktYjQ4MS00YWQ1LWExYTItNWY2ZjNjOGFhMDU3EgABAAAACwAAAGludGVyYWN0aXZlMACAsCQ2kFbaSDcAI-YcvS_bd0O_uR9pKNO6bg.uX9wCmcGnUf3K58SipJW243LEYMx4NGSrkp4SxgMPSI8p55JJsnqZe11nq7iUXaF4GrxWIwP5B6OoDlS3IyoP-mNAYI-cnn96RkyxpA750NoSqd0Yh0CID5lGzlSZDQnxKVtKs97Yafqnmoa5wAZktLpAM4PLRx_BpRWKlV6QY0K-GhEwtsxI_9Hv045XM_JrDsQi3yaYfy6ugGFk-OpOy4DCf0XR6KGLfncr_lGJ2IrMpfTbRKPSOCIyEh8FgK3WfNktAXpW9-YZ6LRkktib3WwZ-xO3_CYepEHFyZMeOfiRoOzftHXeyEi3iIQKW-1MfmFE9ck59r0v3lpOS6Hag",
		basePath: "https://demo.docusign.net/restapi",
		accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
		documentId: req.body.documentId,
		envelopeId: req.body.envelopeId
	};
	let results = null;

	try {
		results = await getDocument(args);
	} catch (error) {
		const errorBody = error && error.response && error.response.body;
		// we can pull the DocuSign error code and message from the response body
		const errorCode = errorBody && errorBody.errorCode;
		const errorMessage = errorBody && errorBody.message;
		// In production, may want to provide customized error messages and
		// remediation advice to the user.
		res.render("pages/error", { err: error, errorCode, errorMessage });
	}
	if (results) {
		// ***DS.snippet.2.start
		res.writeHead(200, {
			"Content-Type": "application/pdf",
			"Content-disposition": "inline;filename=" + req.body.docName,
			"Content-Length": results.fileBytes.length
		});
		res.end(results.fileBytes, "binary");
		// ***DS.snippet.2.end
	}
};

const json = {
	endPosition: "20",
	envelopes: [
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/documents/certificate",
			createdDateTime: "2022-06-21T15:39:32.4900000Z",
			customFieldsUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/custom_fields",
			deliveredDateTime: "2022-06-21T15:39:51.6070000Z",
			documentsCombinedUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/documents/combined",
			documentsUri: "/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/documents",
			emailSubject: "Please sign this document",
			envelopeId: "ce268621-826f-4fc9-a2e0-8057db97d9e1",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-21T15:39:32.4900000Z",
			notificationUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-21T15:39:33.2100000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-21T15:39:51.6070000Z",
			templatesUri: "/envelopes/ce268621-826f-4fc9-a2e0-8057db97d9e1/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/documents/certificate",
			createdDateTime: "2022-06-21T16:41:34.7830000Z",
			customFieldsUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/custom_fields",
			deliveredDateTime: "2022-06-21T16:41:49.1570000Z",
			documentsCombinedUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/documents/combined",
			documentsUri: "/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/documents",
			emailSubject: "Please sign this document",
			envelopeId: "b2fa3fb2-20be-423c-bff8-370536d89892",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-21T16:41:34.7830000Z",
			notificationUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-21T16:41:35.8130000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-21T16:41:49.1570000Z",
			templatesUri: "/envelopes/b2fa3fb2-20be-423c-bff8-370536d89892/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/documents/certificate",
			createdDateTime: "2022-06-21T16:42:53.8200000Z",
			customFieldsUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/custom_fields",
			deliveredDateTime: "2022-06-21T16:43:06.8230000Z",
			documentsCombinedUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/documents/combined",
			documentsUri: "/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/documents",
			emailSubject: "Please sign this document",
			envelopeId: "cdda4e36-c995-4a25-a1b8-840e8d1de808",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-21T16:42:53.8200000Z",
			notificationUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-21T16:42:54.6930000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-21T16:43:06.8230000Z",
			templatesUri: "/envelopes/cdda4e36-c995-4a25-a1b8-840e8d1de808/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/documents/certificate",
			completedDateTime: "2022-06-22T17:30:01.2700000Z",
			createdDateTime: "2022-06-22T17:21:13.4970000Z",
			customFieldsUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/custom_fields",
			deliveredDateTime: "2022-06-22T17:21:39.0270000Z",
			documentsCombinedUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/documents/combined",
			documentsUri: "/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/documents",
			emailSubject: "Please sign this document",
			envelopeId: "470fbfc5-073f-43ee-bac1-945be7fb5dce",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-22T17:21:13.4970000Z",
			notificationUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-22T17:21:14.0730000Z",
			signingLocation: "online",
			status: "completed",
			statusChangedDateTime: "2022-06-22T17:30:01.2700000Z",
			templatesUri: "/envelopes/470fbfc5-073f-43ee-bac1-945be7fb5dce/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/documents/certificate",
			completedDateTime: "2022-06-24T11:05:56.8130000Z",
			createdDateTime: "2022-06-24T11:05:11.2470000Z",
			customFieldsUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/custom_fields",
			deliveredDateTime: "2022-06-24T11:05:29.7900000Z",
			documentsCombinedUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/documents/combined",
			documentsUri: "/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/documents",
			emailSubject: "Please sign this document",
			envelopeId: "d1fa3683-f6c0-4ce0-a880-ce723495f9a3",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T11:05:11.2470000Z",
			notificationUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T11:05:11.8730000Z",
			signingLocation: "online",
			status: "completed",
			statusChangedDateTime: "2022-06-24T11:05:56.8130000Z",
			templatesUri: "/envelopes/d1fa3683-f6c0-4ce0-a880-ce723495f9a3/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/documents/certificate",
			createdDateTime: "2022-06-24T11:13:55.1900000Z",
			customFieldsUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/custom_fields",
			deliveredDateTime: "2022-06-24T11:14:05.7370000Z",
			documentsCombinedUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/documents/combined",
			documentsUri: "/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/documents",
			emailSubject: "Please sign this document",
			envelopeId: "4ac7b547-f92a-478b-82d6-794e6fb92367",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T11:13:55.2030000Z",
			notificationUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T11:13:55.6270000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-24T11:14:05.7370000Z",
			templatesUri: "/envelopes/4ac7b547-f92a-478b-82d6-794e6fb92367/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/documents/certificate",
			createdDateTime: "2022-06-24T11:17:42.9900000Z",
			customFieldsUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/custom_fields",
			documentsCombinedUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/documents/combined",
			documentsUri: "/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/documents",
			emailSubject: "Please sign this document",
			envelopeId: "1a0bb77d-b266-4283-9b0a-9205301cada6",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T11:17:42.9900000Z",
			notificationUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T11:17:43.4600000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T11:17:43.4600000Z",
			templatesUri: "/envelopes/1a0bb77d-b266-4283-9b0a-9205301cada6/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/documents/certificate",
			createdDateTime: "2022-06-24T15:21:31.0630000Z",
			customFieldsUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/custom_fields",
			documentsCombinedUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/documents/combined",
			documentsUri: "/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/documents",
			emailSubject: "Please sign this document",
			envelopeId: "04cbf50c-600d-42e9-8909-540f3bea78b2",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T15:21:31.0630000Z",
			notificationUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T15:21:31.5470000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T15:21:31.5470000Z",
			templatesUri: "/envelopes/04cbf50c-600d-42e9-8909-540f3bea78b2/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/documents/certificate",
			createdDateTime: "2022-06-24T15:35:15.6100000Z",
			customFieldsUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/custom_fields",
			documentsCombinedUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/documents/combined",
			documentsUri: "/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/documents",
			emailSubject: "Please sign this document",
			envelopeId: "42e86494-222c-4acc-af52-70c4e6b87f5c",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T15:35:15.6100000Z",
			notificationUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T15:35:16.1400000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T15:35:16.1400000Z",
			templatesUri: "/envelopes/42e86494-222c-4acc-af52-70c4e6b87f5c/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/documents/certificate",
			createdDateTime: "2022-06-24T15:37:15.5300000Z",
			customFieldsUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/custom_fields",
			deliveredDateTime: "2022-06-24T15:37:46.3230000Z",
			documentsCombinedUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/documents/combined",
			documentsUri: "/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/documents",
			emailSubject: "Please sign this document",
			envelopeId: "2d37cd46-90a6-4919-8e6e-7016b8d5d099",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T15:37:15.5300000Z",
			notificationUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T15:37:15.9970000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-24T15:37:46.3230000Z",
			templatesUri: "/envelopes/2d37cd46-90a6-4919-8e6e-7016b8d5d099/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/documents/certificate",
			createdDateTime: "2022-06-24T16:02:30.0570000Z",
			customFieldsUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/custom_fields",
			deliveredDateTime: "2022-06-24T16:03:25.6600000Z",
			documentsCombinedUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/documents/combined",
			documentsUri: "/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/documents",
			emailSubject: "Please sign this document",
			envelopeId: "ab9b11bd-e96d-41f2-90ed-4aa86da1277c",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:02:30.0570000Z",
			notificationUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:02:30.6670000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-24T16:03:25.6600000Z",
			templatesUri: "/envelopes/ab9b11bd-e96d-41f2-90ed-4aa86da1277c/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/documents/certificate",
			createdDateTime: "2022-06-24T16:08:57.3700000Z",
			customFieldsUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/custom_fields",
			deliveredDateTime: "2022-06-24T16:10:21.3330000Z",
			documentsCombinedUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/documents/combined",
			documentsUri: "/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/documents",
			emailSubject: "Please sign this document",
			envelopeId: "c4213e67-f20a-444d-a457-a92fd0b3d855",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:08:57.3700000Z",
			notificationUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:08:58.0100000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-24T16:10:21.3330000Z",
			templatesUri: "/envelopes/c4213e67-f20a-444d-a457-a92fd0b3d855/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/documents/certificate",
			createdDateTime: "2022-06-24T16:14:12.2630000Z",
			customFieldsUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/custom_fields",
			documentsCombinedUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/documents/combined",
			documentsUri: "/envelopes/8de77519-f584-44d5-82cd-caeb32440092/documents",
			emailSubject: "Please sign this document",
			envelopeId: "8de77519-f584-44d5-82cd-caeb32440092",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/8de77519-f584-44d5-82cd-caeb32440092",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:14:12.2630000Z",
			notificationUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/8de77519-f584-44d5-82cd-caeb32440092/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:14:12.8900000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:14:12.8900000Z",
			templatesUri: "/envelopes/8de77519-f584-44d5-82cd-caeb32440092/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/documents/certificate",
			createdDateTime: "2022-06-24T16:15:26.3070000Z",
			customFieldsUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/custom_fields",
			documentsCombinedUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/documents/combined",
			documentsUri: "/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/documents",
			emailSubject: "Please sign this document",
			envelopeId: "3fa1bd6e-905a-4b31-8641-0b35380a32f2",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:15:26.3230000Z",
			notificationUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:15:27.0100000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:15:27.0100000Z",
			templatesUri: "/envelopes/3fa1bd6e-905a-4b31-8641-0b35380a32f2/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/documents/certificate",
			createdDateTime: "2022-06-24T16:17:31.7130000Z",
			customFieldsUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/custom_fields",
			documentsCombinedUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/documents/combined",
			documentsUri: "/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/documents",
			emailSubject: "Please sign this document",
			envelopeId: "2e01a096-76eb-4047-9764-0967ced6a915",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/2e01a096-76eb-4047-9764-0967ced6a915",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:17:31.7270000Z",
			notificationUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:17:32.2600000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:17:32.2600000Z",
			templatesUri: "/envelopes/2e01a096-76eb-4047-9764-0967ced6a915/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/documents/certificate",
			createdDateTime: "2022-06-24T16:18:48.9300000Z",
			customFieldsUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/custom_fields",
			documentsCombinedUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/documents/combined",
			documentsUri: "/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/documents",
			emailSubject: "Please sign this document",
			envelopeId: "27ec236a-f3d0-41e2-9b9a-c24ec1c1793f",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:18:48.9300000Z",
			notificationUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:18:49.3530000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:18:49.3530000Z",
			templatesUri: "/envelopes/27ec236a-f3d0-41e2-9b9a-c24ec1c1793f/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/documents/certificate",
			createdDateTime: "2022-06-24T16:19:56.2700000Z",
			customFieldsUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/custom_fields",
			documentsCombinedUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/documents/combined",
			documentsUri: "/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/documents",
			emailSubject: "Please sign this document",
			envelopeId: "0c7cec5d-e6af-4e73-9417-d668728cd6c2",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:19:56.2700000Z",
			notificationUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:19:56.7700000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:19:56.7700000Z",
			templatesUri: "/envelopes/0c7cec5d-e6af-4e73-9417-d668728cd6c2/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/documents/certificate",
			createdDateTime: "2022-06-24T16:21:26.2970000Z",
			customFieldsUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/custom_fields",
			documentsCombinedUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/documents/combined",
			documentsUri: "/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/documents",
			emailSubject: "Please sign this document",
			envelopeId: "1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:21:26.3130000Z",
			notificationUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:21:26.9400000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:21:26.9400000Z",
			templatesUri: "/envelopes/1d7ee3eb-0d45-4d7f-9bc4-d9c630552e4e/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/documents/certificate",
			createdDateTime: "2022-06-24T16:22:41.6230000Z",
			customFieldsUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/custom_fields",
			deliveredDateTime: "2022-06-24T16:24:18.7830000Z",
			documentsCombinedUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/documents/combined",
			documentsUri: "/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/documents",
			emailSubject: "Please sign this document",
			envelopeId: "ec4ca518-6694-44d8-ac78-677eed9b286b",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:22:41.6230000Z",
			notificationUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:22:42.1530000Z",
			signingLocation: "online",
			status: "delivered",
			statusChangedDateTime: "2022-06-24T16:24:18.7830000Z",
			templatesUri: "/envelopes/ec4ca518-6694-44d8-ac78-677eed9b286b/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/documents/certificate",
			createdDateTime: "2022-06-24T16:25:32.2630000Z",
			customFieldsUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/custom_fields",
			documentsCombinedUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/documents/combined",
			documentsUri: "/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/documents",
			emailSubject: "Please sign this document",
			envelopeId: "39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-24T16:25:32.2630000Z",
			notificationUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-24T16:25:32.7470000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-24T16:25:32.7470000Z",
			templatesUri: "/envelopes/39a8f666-9e7e-4ddb-96a7-e6fa4e4525ee/templates"
		},
		{
			allowMarkup: "false",
			anySigner: "null",
			attachmentsUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/attachments",
			autoNavigation: "true",
			certificateUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/documents/certificate",
			createdDateTime: "2022-06-25T09:53:21.3770000Z",
			customFieldsUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/custom_fields",
			documentsCombinedUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/documents/combined",
			documentsUri: "/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/documents",
			emailSubject: "Please sign this document",
			envelopeId: "af8d6c8b-81c6-4aa8-b5a4-d18990acac9b",
			envelopeIdStamping: "true",
			envelopeLocation: "not_specified",
			envelopeUri: "/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b",
			expireAfter: "120",
			expireEnabled: "true",
			isSignatureProviderEnvelope: "false",
			lastModifiedDateTime: "2022-06-25T09:53:21.3770000Z",
			notificationUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/notification",
			purgeState: "unpurged",
			recipientsUri:
				"/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/recipients",
			sender: {
				accountId: "f8f8bb0c-71d4-4010-aa02-7e03826a4a06",
				email: "usaibkhan777@gmail.com",
				userId: "e4377774-2794-4699-97a5-d814e6d27974",
				userName: "Usaib Khan"
			},
			sentDateTime: "2022-06-25T09:53:21.8300000Z",
			signingLocation: "online",
			status: "sent",
			statusChangedDateTime: "2022-06-25T09:53:21.8300000Z",
			templatesUri: "/envelopes/af8d6c8b-81c6-4aa8-b5a4-d18990acac9b/templates"
		}
	],
	nextUri: "",
	previousUri: "",
	resultSetSize: "21",
	startPosition: "0",
	totalSetSize: "21"
};
