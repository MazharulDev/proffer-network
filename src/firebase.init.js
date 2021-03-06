// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrNrpa-Up71GtxfppwvVl64TT6hQ4QC1A",
  authDomain: "fir-practice-99dd8.firebaseapp.com",
  projectId: "fir-practice-99dd8",
  storageBucket: "fir-practice-99dd8.appspot.com",
  messagingSenderId: "783927463479",
  appId: "1:783927463479:web:a92120bad9f1733bcff9b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;