// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqQ_DfV0SBW9Le0n_I70J8-e50Xjq54w",
  authDomain: "flashcardsaas-6ac93.firebaseapp.com",
  projectId: "flashcardsaas-6ac93",
  storageBucket: "flashcardsaas-6ac93.appspot.com",
  messagingSenderId: "36941401221",
  appId: "1:36941401221:web:a31b1024a2e4becdd66dec",
  measurementId: "G-ZLP7LK5MFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);