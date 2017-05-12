var firebase = require("firebase");
firebase.initializeApp({
  serviceAccount: "./javascript-firebase-79dc9-firebase-adminsdk-lav2r-b6b077200f.json",
  databaseURL: "https://javascript-firebase-79dc9.firebaseio.com/"
});
var ref = firebase.database().ref('chile_test');

ref.push({
    "text":"Hi สาวเเว่น><"
});