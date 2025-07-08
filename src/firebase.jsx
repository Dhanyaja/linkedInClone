// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXtlklUPeKXADHSuSOAsDewTsXndCAF_w",
  authDomain: "linkedin-clone-final-c05e4.firebaseapp.com",
  projectId: "linkedin-clone-final-c05e4",
  storageBucket: "linkedin-clone-final-c05e4.firebasestorage.app",
  messagingSenderId: "505267911941",
  appId: "1:505267911941:web:c2bffef8ed3eae457acb6c",
  measurementId: "G-Y119DRCSWC",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
