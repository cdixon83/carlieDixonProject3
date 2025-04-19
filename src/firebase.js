// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdC3d3WUksg8YkG-JPvCOooHOol6SMVgY",
  authDomain: "good-vibes-2025.firebaseapp.com",
  projectId: "good-vibes-2025",
  storageBucket: "good-vibes-2025.firebasestorage.app",
  messagingSenderId: "386033564091",
  appId: "1:386033564091:web:a75c41b1b8e13b6e9fec9e",
  measurementId: "G-8CDN1D9WT4"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// this exports the CONFIGURED version of firebase
export default firebase;
