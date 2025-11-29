// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwFGglYFIHkf0ykQBNhEWFsf0ynC_6F88",
  authDomain: "inventory-management-app-8ca41.firebaseapp.com",
  projectId: "inventory-management-app-8ca41",
  storageBucket: "inventory-management-app-8ca41.firebasestorage.app",
  messagingSenderId: "1080430191227",
  appId: "1:1080430191227:web:f4a87f41c85cc04857f8de",
  measurementId: "G-9RY1TMHZC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);