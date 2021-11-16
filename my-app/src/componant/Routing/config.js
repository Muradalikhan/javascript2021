import 'bootstrap-4-react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Covid19 from './covid19';
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
        {/* <nav className='p-3 bg-primary'> */}

          {/* <Link className='btn btn-primary' to="/covid19">Covid-19</Link> */}


          {/* <Link className='btn btn-primary' to="/login">SignIn</Link> */}


          {/* <Link className='btn btn-primary' to="/signup">SignUp</Link> */}
          
          {/* <Link className='btn btn-primary' to="/datatable">DataTable</Link> */}
          
          {/* <Link className='btn btn-primary' to="/paginationtable">Pagenation Table</Link> */}

        {/* </nav> */}

        <Routes>
          {/* <Route index path="/" element={<SignIn />} /> */}
          {/* <Route path="/login" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/covid19" element={<Covid19 />} /> */}
          <Route path="*" element={<ErrorPage />} />
          <Route path="/opendetail" element={<Details />} />
          {/* <Route path="/datatable" element={<DataTable />} /> */}
          <Route path="/" element={<PaginationTable />} />
        </Routes>
      </div>
    </Router>
  );
}

