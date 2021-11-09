import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {signOut } from "firebase/auth";
import auth from "./firebase/firebase";

function Home() {



  let logout=()=>{
    signOut(auth)
  }





  return (
    <>
      <h1>Home</h1>

      <Button variant='contained'
        onClick={logout}
      >
        Sign out
      </Button>

    </>
  );
}
export default Home;