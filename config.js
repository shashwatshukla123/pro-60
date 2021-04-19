 import * as firebase from "firebase";

 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCp--RaIqWVoZlnJ5IiNTXDq4Xjcr8Lksc",
    authDomain: "project-f2d64.firebaseapp.com",
    databaseURL: "https://project-f2d64-default-rtdb.firebaseio.com",
    projectId: "project-f2d64",
    storageBucket: "project-f2d64.appspot.com",
    messagingSenderId: "313627651803",
    appId: "1:313627651803:web:d31b1ff0c71a218e5b26fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var  app=null
if (!firebase.apps.length) {
   app=firebase.initializeApp({});
}else {
   app=firebase.app(); // if already initialized, use that one
}
export default app.database();
  