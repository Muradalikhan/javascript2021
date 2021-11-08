// import firebase from "firebase/app";
import {getAuth} from  "firebase/auth";
import "firebase/database";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCTQHxkT9gcTnW8Y4yp_a_0fSrtCto2Ths",
    authDomain: "myapp-af0c2.firebaseapp.com",
    databaseURL: "https://myapp-af0c2.firebaseio.com",
    projectId: "myapp-af0c2",
    storageBucket: "myapp-af0c2.appspot.com",
    messagingSenderId: "418626890785",
    appId: "1:418626890785:web:dda70baaa2d011e6ed4760"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  export default auth

