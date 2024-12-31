// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCz9NgDwCVnEd0NyW2f8ExeiNJ5MZj4UkM",
    authDomain: "clone-yt-fe9ab.firebaseapp.com",
    projectId: "clone-yt-fe9ab",
    storageBucket: "clone-yt-fe9ab.firebasestorage.app",
    messagingSenderId: "883833037275",
    appId: "1:883833037275:web:039e986c0a1d42572407fe",
    measurementId: "G-Q9MSYMQ6XX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()