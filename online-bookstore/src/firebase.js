import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdpXJBEKu3oie_oYyBNs0OefnYDVl_GIA",
    authDomain: "online-bookstore-90560.firebaseapp.com",
    projectId: "online-bookstore-90560",
    storageBucket: "online-bookstore-90560.appspot.com",
    messagingSenderId: "409040725481",
    appId: "1:409040725481:web:02aed80c148808bd3c5778",
    measurementId: "G-QLJHS38H2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
const auth = getAuth(app);
export { auth };
