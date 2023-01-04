const functions = require("firebase-functions");
const {geocodeRequest} = require("./geocode");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Welcome to Earf!!!");
 });

 exports.geocode = functions.https.onRequest((request, response) => {
    geocodeRequest(request, response);
  });