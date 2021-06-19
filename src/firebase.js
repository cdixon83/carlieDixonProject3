// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPZCK_hiBQZG429rU_gwMpvJoBbZTO7ok",
    authDomain: "because-you-are-awesome.firebaseapp.com",
    projectId: "because-you-are-awesome",
    storageBucket: "because-you-are-awesome.appspot.com",
    messagingSenderId: "131939889041",
    appId: "1:131939889041:web:d8c4e402649ce79b3e3430"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;
