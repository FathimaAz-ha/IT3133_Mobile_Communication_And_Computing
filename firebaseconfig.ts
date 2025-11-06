import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlmRJXfJiTeX-7RrPOYAZeTzUhEX4blVs",
  authDomain: "authentication-65ce8.firebaseapp.com",
  projectId: "authentication-65ce8",
  storageBucket: "authentication-65ce8.firebasestorage.app",
  messagingSenderId: "384364210293",
  appId: "1:384364210293:web:afa5a9d767ca7ac76ab03c",
  measurementId: "G-GZ2MFHL4FB"
};



export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);


export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
