import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDLNNRaeudDvOHMpCW4Lo87tUPFYBpYDX4",
    authDomain: "data-enty-2a8ac.firebaseapp.com",
    projectId: "data-enty-2a8ac",
    storageBucket: "data-enty-2a8ac.appspot.com",
    messagingSenderId: "730220487633",
    appId: "1:730220487633:web:41bedac01f65c44fbf36f0",
    measurementId: "G-CJM4KE9XY8"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
