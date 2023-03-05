import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACm1-OaqHuTHDDZ1BF34xgymJ9KmDTcMI",
  authDomain: "studysamurai.firebaseapp.com",
  projectId: "studysamurai",
  storageBucket: "studysamurai.appspot.com",
  messagingSenderId: "141965273980",
  appId: "1:141965273980:web:1f124206425e928763d2f9"
};

// Initialize Firebase & database
initializeApp(firebaseConfig);
const db = getFirestore();

export { db }