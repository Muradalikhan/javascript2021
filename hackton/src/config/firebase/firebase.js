import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC7dHZVjsKk1qvbGDCCw79FzfHhFPJ-fuc",
  authDomain: "database-work-6ef39.firebaseapp.com",
  databaseURL: "https://database-work-6ef39.firebaseio.com",
  projectId: "database-work-6ef39",
  storageBucket: "database-work-6ef39.appspot.com",
  messagingSenderId: "177884607149",
  appId: "1:177884607149:web:a775a306ec3798f1160c24"
};
  // Initialize Firebase
const FirebaseConnection = initializeApp(firebaseConfig);

const db=getFirestore(FirebaseConnection)

export  {FirebaseConnection,db,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged}