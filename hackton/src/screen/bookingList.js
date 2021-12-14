

import { useEffect, useState } from 'react'
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'


// import table
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
// import input
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
//import icon from mui
import { AddRounded, Delete, Edit } from '@mui/icons-material'


import loader from '../asset/img/loader3.gif'
import Navbar1 from '../componant/navbar/navbar1.js';






function BookingList() {

    let [searchUser, setSearchUser] = useState('')
    let [user, setUser] = useState([])
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);

    //database refrence
    let userCollectionRef = collection(db, 'bookingDetails')


    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUser(data.docs.map((doc, index) => ({ ...doc.data(), id: doc.id, key: index })))
        }

        getUsers();
    }, [user])






    //paggination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };



    return (
        <>
            <Navbar1 />
            <div style={{ margin: '80px auto' }} className="bg-dark text-white">
                <h1 className='p-2'>  Booking Details</h1>
            </div>
            <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', padding: '10px' }} elevation={12}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                </Box>
                <TextField value={searchUser} id="outlined-search" fullWidth label="Search by name" type="text" onChange={(e) => setSearchUser(e.target.value)} />
            </Paper>


            <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', padding: '10px' }} elevation={12}>
                {user.length !== 0 ?
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>
                                        <b> ID </b>
                                    </TableCell>
                                    <TableCell>
                                        <b>  Name</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Email</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>City</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Payment</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Room</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {user
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .filter((user, index) => {
                                        if (searchUser === '') {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                    <TableCell align={user.align}>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.name}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.email}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.city}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.payment}
                                                    </TableCell>
                                                    <TableCell>
                                                        {user.room}
                                                    </TableCell>

                                                </TableRow>
                                            );
                                        } else if (user.name.toLowerCase().includes(searchUser.toLowerCase())) {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                    <TableCell align={user.align}>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.name}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.email}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.city}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.payment}
                                                    </TableCell>
                                                    <TableCell>
                                                        {user.room}
                                                    </TableCell>

                                                </TableRow>
                                            );
                                        }
                                    })
                                    .map((user, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                <TableCell align={user.align}>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell align={user.align}>
                                                    {user.name}
                                                </TableCell>
                                                <TableCell align={user.align}>
                                                    {user.email}
                                                </TableCell>
                                                <TableCell align={user.align}>
                                                    {user.city}
                                                </TableCell>
                                                <TableCell align={user.align}>
                                                    {user.payment}
                                                </TableCell>
                                                <TableCell>
                                                    {user.room}
                                                </TableCell>

                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <img src={loader} style={{ margin: '0 auto' }} alt='spinner'></img>

                    </div>
                }
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={user.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}

export default BookingList