
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
  import {
    getDatabase,
    set,
    get,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
  } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyDs9MG5oa3_HB0xEdQSHuhELqOm2p1rZ_E",
  authDomain: "realdatabasework.firebaseapp.com",
  projectId: "realdatabasework",
  storageBucket: "realdatabasework.appspot.com",
  messagingSenderId: "982400318326",
  appId: "1:982400318326:web:70f29161cc32b129209857",
  measurementId: "G-D248P7G8BQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);



export {
    auth,
    db,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    set,
    push,
    remove,
    ref,
    onValue,
    onChildAdded,
    child,
    get,
  };