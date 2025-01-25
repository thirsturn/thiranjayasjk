// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFBCDxVNaFIs55ewyO9DfH9Kvux6MNV6I",
    authDomain: "thiranjayasjk.firebaseapp.com",
    projectId: "thiranjayasjk",
    storageBucket: "thiranjayasjk.firebasestorage.app",
    messagingSenderId: "439754064119",
    appId: "1:439754064119:web:12bed469af1f5b63ec13f2",
    measurementId: "G-LYQBMNLSN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);