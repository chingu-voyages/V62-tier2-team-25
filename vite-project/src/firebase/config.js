// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHKxynfNyj6RekRkwGGKHNszvKQj3ZCB8",
  authDomain: "aipath-fc164.firebaseapp.com",
  projectId: "aipath-fc164",
  storageBucket: "aipath-fc164.firebasestorage.app",
  messagingSenderId: "265810878521",
  appId: "1:265810878521:web:50637cc948e729c5d7ede8",
  measurementId: "G-YLH1Z5T84J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);