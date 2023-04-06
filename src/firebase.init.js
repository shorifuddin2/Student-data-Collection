// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfy960ddoJatRbMDehKpBNzzAChAMvcPU",
  authDomain: "student-app-a5b1d.firebaseapp.com",
  projectId: "student-app-a5b1d",
  storageBucket: "student-app-a5b1d.appspot.com",
  messagingSenderId: "58262830236",
  appId: "1:58262830236:web:2bedfd853af17e59978159",
  measurementId: "G-DLTHGS1V8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;