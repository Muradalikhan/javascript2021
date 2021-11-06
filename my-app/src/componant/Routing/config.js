import 'bootstrap-4-react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './home';
import SignIn from './signin';
import SignUp from './signup';
import ErrorPage from './error';

export default function App() {
  return (
    <Router>
      <div>
        <nav className='p-3 bg-secondary'>
          
              <Link className='btn btn-primary' to="/home">Home</Link>
            
           
              <Link className='btn btn-primary' to="/">SignIn</Link>
        
              <Link className='btn btn-primary' to="/signup">SignUp</Link>
           
        </nav>

        <Routes>
          <Route path="/" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home"  element={<Home/>} />
          <Route path="*"  element={<ErrorPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

