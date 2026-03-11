// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwZBv5mZlrJetx2QYuCuT65dsXE1iOIaM",
  authDomain: "netflixgpt2-d612c.firebaseapp.com",
  projectId: "netflixgpt2-d612c",
  storageBucket: "netflixgpt2-d612c.firebasestorage.app",
  messagingSenderId: "686461383098",
  appId: "1:686461383098:web:34896761daad621f6aad83",
  measurementId: "G-V22G1NFPVE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);