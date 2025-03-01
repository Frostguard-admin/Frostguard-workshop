// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRV9B3lfZD0oh5rnlgEIXQw2-hzgrXDDM",
    authDomain: "frostguard-89b29.firebaseapp.com",
    projectId: "frostguard-89b29",
    storageBucket: "frostguard-89b29.firebasestorage.app",
    messagingSenderId: "435772035211",
    appId: "1:435772035211:web:4aaa46d8cdea9b30e4448e",
    measurementId: "G-ETTPCVCQ43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 