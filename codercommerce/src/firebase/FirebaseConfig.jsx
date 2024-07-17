// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZTtVFu65EpY_ixwKBvPNEDRHuBRm3Es",
  authDomain: "coder-commerce-8d5d5.firebaseapp.com",
  projectId: "coder-commerce-8d5d5",
  storageBucket: "coder-commerce-8d5d5.appspot.com",
  messagingSenderId: "573982684723",
  appId: "1:573982684723:web:84e49a9e4c0fa793bdd546"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth (app);

export {fireDB, auth}