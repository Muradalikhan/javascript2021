
import {  BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
// screen
import Login from "../../screen/login";
import Signup from "../../screen/signup";
import Home from "../../screen/home";




export default function RouterApp() {
    return (
      <Router>
        
       
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}> </Route>
          </Routes>
       
      </Router>
    );
  }