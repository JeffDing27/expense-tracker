// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ0hilP-Du2qgkc_N7ZtOubo-8iHrQRRY",
  authDomain: "my-awesome-project-8c060.firebaseapp.com",
  projectId: "my-awesome-project-8c060",
  storageBucket: "my-awesome-project-8c060.appspot.com",
  messagingSenderId: "882833270181",
  appId: "1:882833270181:web:15f90f60e15d612d81744c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);