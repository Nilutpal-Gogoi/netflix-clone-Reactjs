import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyBujWgohqX0VXwxfIEixkaY6w6S4Js70AY",
  authDomain: "netflix-clone-6ff56.firebaseapp.com",
  databaseURL: "https://netflix-clone-6ff56.firebaseio.com",
  projectId: "netflix-clone-6ff56",
  storageBucket: "netflix-clone-6ff56.appspot.com",
  messagingSenderId: "66265552636",
  appId: "1:66265552636:web:f3130f59c63f6961882979"
};

const firebase = Firebase.initializeApp(config);


export { firebase };

