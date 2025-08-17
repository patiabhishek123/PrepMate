// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6XhMBBr1toqSklzNwz1HEfga_6YQESd8",
  authDomain: "prepmate-36501.firebaseapp.com",
  projectId: "prepmate-36501",
  storageBucket: "prepmate-36501.firebasestorage.app",
  messagingSenderId: "552647077517",
  appId: "1:552647077517:web:f84dacdc2a24ee40a93cc4",
  measurementId: "G-XGTHFNM9QX"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const dp=getFirestore(app)