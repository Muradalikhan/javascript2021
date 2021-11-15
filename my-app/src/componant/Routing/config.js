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
import PaginationTable from './tablePagination';

export default function App() {
  return (
    <Router>
      <div>
        <nav className='p-3 bg-primary'>

          <Link className='btn btn-primary' to="/home">Home</Link>


          <Link className='btn btn-primary' to="/login">SignIn</Link>


          <Link className='btn btn-primary' to="/signup">SignUp</Link>
          
          <Link className='btn btn-primary' to="/datatable">DataTable</Link>
          
          <Link className='btn btn-primary' to="/paginationtable">Pagenation Table</Link>

        </nav>

        <Routes>
          <Route index path="/" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/opendetail" element={<Details />} />
          <Route path="/datatable" element={<DataTable />} />
          <Route path="/paginationtable" element={<PaginationTable />} />
        </Routes>
      </div>
    </Router>
  );
}

