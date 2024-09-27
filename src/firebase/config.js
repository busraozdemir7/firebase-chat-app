// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6G_wTKWPilKCL1Wnt45LVZRgTR7ru-FI",
    authDomain: "chat-app-a6b72.firebaseapp.com",
    projectId: "chat-app-a6b72",
    storageBucket: "chat-app-a6b72.appspot.com",
    messagingSenderId: "459946737722",
    appId: "1:459946737722:web:251737ac472e1b24d9f503"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// authentication hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumunu yap
export const provider = new GoogleAuthProvider();

// veritabanı hizmetinin referansını al
export const db = getFirestore(app);