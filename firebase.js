// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByZrD8AxUMMq2heBInibylgdrKRol8BB0",
  authDomain: "food-ea600.firebaseapp.com",
  projectId: "food-ea600",
  storageBucket: "food-ea600.appspot.com",
  messagingSenderId: "451241334959",
  appId: "1:451241334959:web:f575939885576f0486dc5a",
  measurementId: "G-7KDQBSVBCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);