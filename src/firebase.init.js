// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABAlKfjKr-P9hdvuVAALkMDGkWJV8PKOw",
    authDomain: "laptop-warehouse-managem-a1da6.firebaseapp.com",
    projectId: "laptop-warehouse-managem-a1da6",
    storageBucket: "laptop-warehouse-managem-a1da6.appspot.com",
    messagingSenderId: "610003347289",
    appId: "1:610003347289:web:d90874c882d4112aed4e48"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;