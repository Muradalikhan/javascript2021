import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTQHxkT9gcTnW8Y4yp_a_0fSrtCto2Ths",
    authDomain: "myapp-af0c2.firebaseapp.com",
    databaseURL: "https://myapp-af0c2.firebaseio.com",
    projectId: "myapp-af0c2",
    storageBucket: "myapp-af0c2.appspot.com",
    messagingSenderId: "418626890785",
    appId: "1:418626890785:web:dda70baaa2d011e6ed4760"
  };

  // Initialize Firebase
const FirebaseConnection = initializeApp(firebaseConfig);

const db=getFirestore(FirebaseConnection)

export  {FirebaseConnection,db,getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,onAuthStateChanged}