// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUj6itzVgabKfveBguWF4CsaFOPtQr0M8",
  authDomain: "voice-shopping-assistant-7c3f8.firebaseapp.com",
  projectId: "voice-shopping-assistant-7c3f8",
  storageBucket: "voice-shopping-assistant-7c3f8.firebasestorage.app",
  messagingSenderId: "255398224943",
  appId: "1:255398224943:web:6d6169e2b7797187fc52da",
  measurementId: "G-KG0BYW73JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
