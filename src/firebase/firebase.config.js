// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1J1OYjO_-549QIrqyf30fjzIdCoGSV6g",
    authDomain: "coffee-store-espresso.firebaseapp.com",
    projectId: "coffee-store-espresso",
    storageBucket: "coffee-store-espresso.appspot.com",
    messagingSenderId: "103794066437",
    appId: "1:103794066437:web:0ca5ac1d6a32895c3c486c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
