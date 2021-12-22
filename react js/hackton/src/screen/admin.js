import React from 'react'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'
import AdminNavbar from '../componant/navbar/navbar3'

export default function AdminDashboard() {
    return (
        <div>
           <AdminNavbar/>
           <h1 className='p-3 bg-dark text-white'>  Home</h1>

        <div className='col-sm-8' style={{margin:'60px auto'}}>

            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/hotelregistration'>Hotel Registration</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/users'>User List</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/bookinglist'>Booking Details</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/dashboard'>hotel website</Link></Paper>
           
        </div>
        </div>
    )
}
