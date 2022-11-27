// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07yFlHbgA5yO3AoXlK-UTrcIVQQvgXnY",
  authDomain: "swmobile5.firebaseapp.com",
  projectId: "swmobile5",
  storageBucket: "swmobile5.appspot.com",
  messagingSenderId: "1061069309050",
  appId: "1:1061069309050:web:250ae1c36690b071f3a7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize auth
export const auth = getAuth(app)

//Initialize firestore
export const db = getFirestore(app)