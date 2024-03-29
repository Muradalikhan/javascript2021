

import { useEffect, useState } from 'react'
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
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
import AdminNavbar from '../componant/navbar/navbar3.js';





function HotelRegistration() {
    let [updateHotelID, setupdateHotelID] = useState('')
    let [name, setName] = useState('')
    let [services, setservices] = useState('')
    let [price, setPrice] = useState('')
    let [room, setRoom] = useState('')
    let [contact, setContact] = useState('')
    let [country, setCountry] = useState('')
    let [searchhotel, setSearchhotel] = useState('')
    let [hotelImgUrl, setHotelImgUrl] = useState('')
    let [hotel, setHotel] = useState([])
    let [btnControll, setBtnControll] = useState(true)
    let [isLogin, setIsLogin] = useState(false)

    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);

    //database refrence
    let hotelCollectionRef = collection(db, 'hotelRegistration')
    const auth = getAuth()
    const navigation = useNavigate()


    useEffect(() => {

        //check admin
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser.email === 'admin@gmail.com') {
                setIsLogin(true)

            } else {
                setIsLogin(false)

            }
        });





        const getHotelsList = async () => {
            const data = await getDocs(hotelCollectionRef)
            setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getHotelsList();
    }, [hotel])


    //add data 
    let addData = async () => {
        await addDoc(hotelCollectionRef, { name, services, price, room, country, contact, hotelImgUrl })
        setName('')
        setservices('')
        setPrice('')
        setRoom('')
        setCountry('')
        setContact('')
        setHotelImgUrl('')
    }

    

    let setupdateField = (hotel) => {

        navigation('/registrationForm', { state: hotel })
       
    }

    //delte data
    let deletehotel = (id) => {
        const hotelDoc = doc(db, 'hotelRegistration', id)
        deleteDoc(hotelDoc)
    }


    //paggination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const goto = () => {
        navigation('/registrationForm')
    }


    return (
        <>
            <div>
                {isLogin === true ? <AdminNavbar /> : <Navbar1 />}
                <h1 className='p-3 bg-dark text-white'>  Hotel Registration</h1>
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

                    <TextField style={{ width: '50%' }} value={searchhotel} id="outlined-search" label="Search by name" type="text" onChange={(e) => setSearchhotel(e.target.value)} />
                    {/* {btnControll ? <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={addData}><AddRounded />ADD</Button>
                        : <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={updatehotel}><AddRounded />Update</Button>} */}

                    <Button variant='contained' size='large' sx={{ width: 160, marginTop: 2 }} onClick={goto}><AddRounded />Add New</Button>

                </Box>
            </Paper>


            <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto', padding: '10px' }} elevation={12}>
                {hotel.length !== 0 ?
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
                                        <b>services</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Country</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Contact</b>
                                    </TableCell>
                                    <TableCell>
                                        <b>Action</b>
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {hotel
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .filter((hotel, index) => {
                                        if (searchhotel === '') {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                    <TableCell align={hotel.align}>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.name}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.services}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.country}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.contact}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel) }}><Edit /></Button>
                                                        <Button variant='contained' color='error' size="small" onClick={() => deletehotel(hotel.id)}> <Delete /></Button>
                                                    </TableCell>

                                                </TableRow>
                                            );
                                        } else if (hotel.name.toLowerCase().includes(searchhotel.toLowerCase())) {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                    <TableCell align={hotel.align}>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.name}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.services}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.country}
                                                    </TableCell>
                                                    <TableCell align={hotel.align}>
                                                        {hotel.contact}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel) }}><Edit /></Button>
                                                        <Button variant='contained' color='error' size="small" onClick={() => deletehotel(hotel.id)}> <Delete /></Button>
                                                    </TableCell>

                                                </TableRow>
                                            );
                                        }
                                    })
                                    .map((hotel, index) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                <TableCell align={hotel.align}>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell align={hotel.align}>
                                                    {hotel.name}
                                                </TableCell>
                                                <TableCell align={hotel.align}>
                                                    {hotel.services}
                                                </TableCell>
                                                <TableCell align={hotel.align}>
                                                    {hotel.country}
                                                </TableCell>
                                                <TableCell align={hotel.align}>
                                                    {hotel.contact}
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel) }}><Edit /></Button>
                                                    <Button variant='contained' color='error' size="small" onClick={() => deletehotel(hotel.id)}> <Delete /></Button>
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
                    count={hotel.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}

export default HotelRegistration