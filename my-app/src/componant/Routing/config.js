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
import Details from './openDetail';
import DataTable from './dataTable';

export default function App() {
  return (
    <Router>
      <div>
        <nav className='p-3 bg-primary'>

          <Link className='btn btn-primary' to="/home">Home</Link>


          <Link className='btn btn-primary' to="/login">SignIn</Link>


          <Link className='btn btn-primary' to="/signup">SignUp</Link>
          
          <Link className='btn btn-primary' to="/dataTable">DataTable</Link>

        </nav>

        <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/openDetail" element={<Details />} />
          <Route path="/dataTable" element={<DataTable />} />
        </Routes>
      </div>
    </Router>
  );
}

