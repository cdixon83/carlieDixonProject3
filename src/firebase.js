// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0HTk0VeASzF3E5BqO6e7tMNV5OHRV6xk",
    authDomain: "good-vibes-2021-july.firebaseapp.com",
    projectId: "good-vibes-2021-july",
    storageBucket: "good-vibes-2021-july.appspot.com",
    messagingSenderId: "341405034707",
    appId: "1:341405034707:web:04688d451ba94256a50c26"

};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;
