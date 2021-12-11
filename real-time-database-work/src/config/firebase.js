
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);