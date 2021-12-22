import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
// import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDs9MG5oa3_HB0xEdQSHuhELqOm2p1rZ_E",
  authDomain: "realdatabasework.firebaseapp.com",
  projectId: "realdatabasework",
  storageBucket: "realdatabasework.appspot.com",
  messagingSenderId: "982400318326",
  appId: "1:982400318326:web:70f29161cc32b129209857",
  measurementId: "G-D248P7G8BQ"
};
  // Initialize Firebase
const FirebaseConnection = initializeApp(firebaseConfig);

const db=getFirestore(FirebaseConnection)
// const db=getDatabase(FirebaseConnection)

export  {FirebaseConnection,db,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged}