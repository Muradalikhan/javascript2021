
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DashBoard from "../container/dashboard";
import Login from "../container/login";
import Signup from "../container/signup";

export default function RouterApp() {
  return (
    <Router>
      
     
        <Routes>
          <Route path="/" element={<DashBoard/>}> </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}> </Route>
        </Routes>
     
    </Router>
  );
}
