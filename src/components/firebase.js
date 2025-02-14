import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBmR3GSVYkjoqB3abYYPo0NqhyDX-ILUKU",
    authDomain: "lead-generation-database.firebaseapp.com",
    projectId: "lead-generation-database",
    storageBucket: "lead-generation-database.appspot.com",
    messagingSenderId: "42227662086",
    appId: "1:42227662086:web:cc1043134a2cebdf66f287"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };