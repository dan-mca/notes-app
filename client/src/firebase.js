// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhmapG7JjC0dJ5jKN3l_oEvGvg1cUUBI8",
  authDomain: "notes-1dffb.firebaseapp.com",
  projectId: "notes-1dffb",
  storageBucket: "notes-1dffb.appspot.com",
  messagingSenderId: "1045370360427",
  appId: "1:1045370360427:web:fc0f26198bd1d256f0572e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth }