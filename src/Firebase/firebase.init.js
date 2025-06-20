// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XNQy06B7nFpnxjuvzGzzigBBDSM7RNs",
  authDomain: "boi-poka-shop.firebaseapp.com",
  projectId: "boi-poka-shop",
  storageBucket: "boi-poka-shop.firebasestorage.app",
  messagingSenderId: "303233567050",
  appId: "1:303233567050:web:09b6ad18a7dfed34c699b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;