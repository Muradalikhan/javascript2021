
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
import Crud from "../container/crud";
import ReduxTest from "../container/reduxFTest";

export default function RouterApp() {
  return (
    <Router>
      
     
        <Routes>
          {/* <Route path="/" element={<DashBoard/>}> </Route> */}
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}> </Route>
          <Route path="/crud" element={<Crud/>}> </Route>
          <Route path="/" element={<ReduxTest/>}> </Route>
          <Route path="/quizapp" element={<ReduxTest/>}> </Route>
        </Routes>
     
    </Router>
  );
}
