// config firebase
//--------------------------------------------------
import {  toast } from "react-toastify";
// -------------------------------------------------------
import { ref, set, push } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDs9MG5oa3_HB0xEdQSHuhELqOm2p1rZ_E",
  authDomain: "realdatabasework.firebaseapp.com",
  databaseURL: "https://realdatabasework-default-rtdb.firebaseio.com",
  projectId: "realdatabasework",
  storageBucket: "realdatabasework.appspot.com",
  messagingSenderId: "982400318326",
  appId: "1:982400318326:web:70f29161cc32b129209857",
  measurementId: "G-D248P7G8BQ",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//--------------------------------------------------
// crud function
//--------------------------------------------------
const addData = (dbRef, obj) => {
  const todoListRef = ref(db, dbRef);
  const newTodoRef = push(todoListRef);
  set(newTodoRef, obj)
    .then(() => {
      toast.success("data saved");
    })
    .catch((error) => {
      toast.error("something went wrong", error);
    });
};

//--------------------------------------------------
export { db, addData };
