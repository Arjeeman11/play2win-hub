import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZxYn3j_y-DlYboLQKSoFIgbgxKPDuGbQ",
  authDomain: "play2winhub-b415a.firebaseapp.com",
  projectId: "play2winhub-b415a",
  storageBucket: "play2winhub-b415a.appspot.com",
  messagingSenderId: "4468192459",
  appId: "1:4468192459:web:725fd798218a179ace574e",
  measurementId: "G-8NK69RRBV9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

