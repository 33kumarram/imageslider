// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJd0-LEZgryuAKbdQ0aQU-cFxzrHsM0c",
  authDomain: "twitter-clone-cc7be.firebaseapp.com",
  projectId: "twitter-clone-cc7be",
  storageBucket: "twitter-clone-cc7be.appspot.com",
  messagingSenderId: "264270360344",
  appId: "1:264270360344:web:48b3e50200ba7e42fd786d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
