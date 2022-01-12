
import {  BrowserRouter as Router, Routes, Route} from "react-router-dom";
// screen
import Login from "../../screen/login";
import Signup from "../../screen/signup";
import TableCrud from "../../screen/tableCrud";
import Users from "../../screen/users";
import Chat from "../../screen/chat";
import Error from "../../screen/Error";
import ProductDetails from "../../screen/productDetail"
import HotelRegistration from "../../screen/hotelRegList";
import HotelDisplay from "../../screen/hoteldisplay";
import HotelDetail from "../../screen/hotelDetails";
import AdminDashboard from "../../screen/admin";
import Booking from "../../screen/booking"
import BookingList from "../../screen/bookingList";
import HotelRegForm from "../../screen/hotelRegForm";




export default function RouterApp() {
    return (
      <Router>
        
       
          <Routes>
            {/* -----------------In use--------------------------- */}
            <Route path="/" element={<HotelDisplay/>}> </Route>
            <Route path="/dashboard" element={<HotelDisplay/>}> </Route>
            <Route path="/admin" element={<AdminDashboard />}> </Route>
            <Route path="/hotelregistration" element={<HotelRegistration/>}> </Route>
            <Route path="/registrationForm" element={<HotelRegForm/>}> </Route>
            <Route path="/detail" element={<HotelDetail/>}> </Route>
            <Route path="/booking" element={<Booking/>}> </Route>
            <Route path="/bookinglist" element={<BookingList/>}> </Route>
           



            {/* -----------------not in  use--------------------------- */}
            <Route path="/products/:id" element={<ProductDetails/>}> </Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}> </Route>
            <Route path="/table" element={<TableCrud/>}> </Route>
            <Route path="/users" element={<Users/>}> </Route>
            <Route path="/chatApp" element={<Chat/>}> </Route>
            <Route path="*" element={<Error/>}> </Route>
          </Routes>
       
      </Router>
    );
  }