// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "online-bookstore-90560",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "409040725481",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
