// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9reb4yI97_cDbejdEVZF5x8SCmbnMB8c",
  authDomain: "queue-system-3eb79.firebaseapp.com",
  projectId: "queue-system-3eb79",
  storageBucket: "queue-system-3eb79.firebasestorage.app",
  messagingSenderId: "760880132732",
  appId: "1:760880132732:web:ac360cdb89ca5ac71d4ff9",
  measurementId: "G-LNJZ1JVZ73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
