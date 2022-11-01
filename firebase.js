// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBleteg70UvvXLRaWneecWgmqBSlZCY4gQ",
  authDomain: "notes-26902.firebaseapp.com",
  projectId: "notes-26902",
  storageBucket: "notes-26902.appspot.com",
  messagingSenderId: "242015768874",
  appId: "1:242015768874:web:469cc68ca55f24e18e0e53",
  measurementId: "G-0J1ZT58QWR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);