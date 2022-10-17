import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAD2nfz-QKG2K-Rf3ndzao_Qg_6O04Uamo",
  authDomain: "react-firebase-12bc9.firebaseapp.com",
  projectId: "react-firebase-12bc9",
  storageBucket: "react-firebase-12bc9.appspot.com",
  messagingSenderId: "727062088160",
  appId: "1:727062088160:web:f7c268ac4d40835f128385",
  measurementId: "G-KHY6TDN8D6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);