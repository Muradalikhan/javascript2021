

import React from 'react'
import {getAuth} from '../../config/firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


export default function AdminNavbar() {



    const navigate = useNavigate()
    const auth = getAuth()
    const signout = () => {
      signOut(auth)
      navigate('/login')
  
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-4" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/admin">Admin</a>
                    <ul className="navbar-nav  mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/admin">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/users">User List</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/bookinglist">Booking Details</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/hotelregistration">Hotel Regestration</a>
                        </li>
                        <li className="nav-item float-right">
                        <button class="btn btn-outline-success my-2 my-sm-0 " type="submit" onClick={signout}>Sign out</button>
                        </li>
                        
                    </ul>
            
                </div>
            </nav>
        </>
    )
}
