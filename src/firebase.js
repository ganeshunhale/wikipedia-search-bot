// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBleteg70UvvXLRaWneecWgmqBSlZCY4gQ",
//   authDomain: "notes-26902.firebaseapp.com",
//   projectId: "notes-26902",
//   storageBucket: "notes-26902.appspot.com",
//   messagingSenderId: "242015768874",
//   appId: "1:242015768874:web:469cc68ca55f24e18e0e53",
//   measurementId: "G-0J1ZT58QWR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConfig = {
  apiKey: "AIzaSyApGeLfb9QSsqhr77kdOKvJX9F7xl7vKts",
  authDomain: "wikipedia-search-bot.firebaseapp.com",
  projectId: "wikipedia-search-bot",
  storageBucket: "wikipedia-search-bot.appspot.com",
  messagingSenderId: "793875740033",
  appId: "1:793875740033:web:38e1e38fbfee04188ce480",
  measurementId: "G-G420XY7774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);