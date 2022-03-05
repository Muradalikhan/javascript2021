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

// Get a reference to the database service
const db = getDatabase(app);

export { db };
