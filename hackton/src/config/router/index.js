
import {  BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
// screen
import Login from "../../screen/login";
import Signup from "../../screen/signup";
import Home from "../../screen/home";
import TableCrud from "../../screen/tableCrud";
import Users from "../../screen/users";




export default function RouterApp() {
    return (
      <Router>
        
       
          <Routes>
            <Route path="/" element={<Home/>}> </Route>
            <Route path="dashboard" element={<Home/>}> </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}> </Route>
            <Route path="/table" element={<TableCrud/>}> </Route>
            <Route path="/users" element={<Users/>}> </Route>
          </Routes>
       
      </Router>
    );
  }