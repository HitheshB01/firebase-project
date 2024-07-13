// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth ,GoogleAuthProvider}from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_R2NvUgAd0JG2qXX5phG5RYjnFVTuxMk",
  authDomain: "fir-proj-b349a.firebaseapp.com",
  projectId: "fir-proj-b349a",
  storageBucket: "fir-proj-b349a.appspot.com",
  messagingSenderId: "458653179226",
  appId: "1:458653179226:web:92a81e29de09794ad82763",
  measurementId: "G-G24DE0LMQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const googleProvider= new GoogleAuthProvider()