// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-dqiOpZswH3vILdSx0MIOBVUvq9BZqyk",
    authDomain: "smart-deals-d0abd.firebaseapp.com",
    projectId: "smart-deals-d0abd",
    storageBucket: "smart-deals-d0abd.firebasestorage.app",
    messagingSenderId: "556001364975",
    appId: "1:556001364975:web:e5cbe7ae799141b3f0041a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);