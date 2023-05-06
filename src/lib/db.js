// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy, getDocs, addDoc, limit, startAt } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA6Uw7BbWkScJWrUzC0DvNTtgooyCEtanQ",
    authDomain: "url-short-b78d9.firebaseapp.com",
    projectId: "url-short-b78d9",
    storageBucket: "url-short-b78d9.appspot.com",
    messagingSenderId: "93126552419",
    appId: "1:93126552419:web:d072abc95bd0c057b24156",
    measurementId: "G-D7B32PLDG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
