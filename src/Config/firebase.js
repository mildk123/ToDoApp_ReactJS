import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAosAXgYt-gniqc-LLgZLy-bWTI4lAnGqM",
  authDomain: "react-todoapp-124be.firebaseapp.com",
  databaseURL: "https://react-todoapp-124be.firebaseio.com",
  projectId: "react-todoapp-124be",
  storageBucket: "react-todoapp-124be.appspot.com",
  messagingSenderId: "555425814855"
};
firebase.initializeApp(config);

export default firebase;