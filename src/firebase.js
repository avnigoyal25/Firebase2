// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdBv1-n1JN3TxdoBVC-CS0zpWA3gbpuek",
  authDomain: "fir-e5caa.firebaseapp.com",
  databaseURL: "https://fir-e5caa-default-rtdb.firebaseio.com",
  projectId: "fir-e5caa",
  storageBucket: "fir-e5caa.appspot.com",
  messagingSenderId: "142877978476",
  appId: "1:142877978476:web:5b0bbd33f840d076cc0d49",
  measurementId: "G-229XRMNQ16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
