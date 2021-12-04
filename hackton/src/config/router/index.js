
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
// screen
import Login from "../../screen/login";
import Signup from "../../screen/signup";
import Home from "../../screen/home";

function RouterApp() {

    return (
        <div>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='login'>Login</Link></li>
                <li><Link to='signup'>Signup</Link></li>
            </ul>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp