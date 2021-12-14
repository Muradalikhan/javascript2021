

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






function HotelRegistration() {
    let [updateHotelID, setupdateHotelID] = useState('')
    let [name, setName] = useState('')
    let [services, setservices] = useState('')
    let [price, setPrice] = useState('')
    let [room, setRoom] = useState('')
    let [contact, setContact] = useState('')
    let [country, setCountry] = useState('')
    let [searchhotel, setSearchhotel] = useState('')
    let [hotel, setHotel] = useState([])
    let [hotelImgUrl, setHotelImgUrl] = useState('')
    let [btnControll, setBtnControll] = useState(true)
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);

    //database refrence
    let hotelCollectionRef = collection(db, 'hotelRegistration')


    useEffect(() => {
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

    //update data
    let updatehotel = async () => {
        const hotelDoc = doc(db, 'hotelRegistration', updateHotelID)
        const updatedField = { name: name, services: services, price: price, room: room, contact: contact, country: country, hotelImgUrl: hotelImgUrl }
        await updateDoc(hotelDoc, updatedField)


        setName('')
        setservices('')
        setContact('')
        setCountry('')
        setPrice('')
        setRoom('')
        setHotelImgUrl('')
        setBtnControll(true)

    }

    let setupdateField = (id, name, services, price, room, country, contact, hotelImgUrl) => {
        setupdateHotelID(id)
        setName(name)
        setservices(services)
        setPrice(price)
        setRoom(room)
        setContact(contact)
        setCountry(country)
        setHotelImgUrl(hotelImgUrl)
        setBtnControll(false)


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



    return (
        <>
            <div>
                <Navbar1 />
                <h1>  Crud operation</h1>
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
                    <TextField value={name} id="outlined-search" label="Name" type="Text" onChange={(e) => setName(e.target.value)} />
                    <TextField value={services} id="outlined-search" label="Services" type="services" onChange={(e) => setservices(e.target.value)} />
                    <TextField value={price} id="outlined-search" label="Price per day" type="text" onChange={(e) => setPrice(e.target.value)} />
                    <TextField value={room} id="outlined-search" label="Room" type="text" onChange={(e) => setRoom(e.target.value)} />
                    <TextField value={country} id="outlined-search" label="Country" type="text" onChange={(e) => setCountry(e.target.value)} />
                    <TextField value={contact} id="outlined-search" label="Contact" type="text" onChange={(e) => setContact(e.target.value)} />
                    <TextField value={hotelImgUrl} id="outlined-search" label="image url" type="text" onChange={(e) => setHotelImgUrl(e.target.value)} />
                    <TextField value={searchhotel} id="outlined-search" label="Search by name" type="text" onChange={(e) => setSearchhotel(e.target.value)} />
                    {btnControll ? <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={addData}><AddRounded />ADD</Button>
                        : <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={updatehotel}><AddRounded />Update</Button>}

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
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel.id, hotel.name, hotel.services, hotel.price, hotel.room, hotel.country, hotel.contact) }}><Edit /></Button>
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
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel.id, hotel.name, hotel.services, hotel.price, hotel.room, hotel.country, hotel.contact) }}><Edit /></Button>
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
                                                    <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(hotel.id, hotel.name, hotel.services, hotel.price, hotel.room, hotel.country, hotel.contact) }}><Edit /></Button>
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