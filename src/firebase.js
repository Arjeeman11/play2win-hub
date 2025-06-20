// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZxYn3j_y-DlYboLQKSoFIgbgxKPDuGbQ",
  authDomain: "play2winhub-b415a.firebaseapp.com",
  projectId: "play2winhub-b415a",
  storageBucket: "play2winhub-b415a.firebasestorage.app",
  messagingSenderId: "4468192459",
  appId: "1:4468192459:web:725fd798218a179ace574e",
  measurementId: "G-8NK69RRBV9"
};

// ✅ Initialize Firebase and export
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
