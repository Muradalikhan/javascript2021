import React from 'react'
import Navbar1 from '../componant/navbar/navbar1'
import { Link } from 'react-router-dom'
import { Paper } from '@mui/material'

export default function AdminDashboard() {
    return (
        <div>
           <Navbar1/>

        <div className='col-sm-8' style={{margin:'80px auto'}}>

            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/hotelregistration'>Hotel Registration</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/users'>User List</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/bookinglist'>Booking Details</Link></Paper>
            <Paper className="p-3 m-3" elevation={12}><Link className="text-decoration-none text-black" to='/dashboard'>hotel website</Link></Paper>
           
        </div>
        </div>
    )
}
