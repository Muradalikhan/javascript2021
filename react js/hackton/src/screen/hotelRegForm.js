

import React from 'react'

import { useEffect, useState } from 'react'
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Paper from '@mui/material/Paper';
// import input
import Box from '@mui/material/Box';
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import Navbar1 from '../componant/navbar/navbar1.js';
import AdminNavbar from '../componant/navbar/navbar3.js';
import { AddRounded } from '@mui/icons-material';
import { useNavigate,useLocation } from 'react-router-dom';



export default function HotelRegForm() {
    let [updateHotelID, setupdateHotelID] = useState('')
    let [name, setName] = useState('')
    let [services, setservices] = useState('')
    let [price, setPrice] = useState('')
    let [room, setRoom] = useState('')
    let [contact, setContact] = useState('')
    let [country, setCountry] = useState('')
    let [hotelImgUrl, setHotelImgUrl] = useState('')
    let [btnControll, setBtnControll] = useState(true)
    let [isLogin, setIsLogin] = useState(false)
   
    //database refrence
    let hotelCollectionRef = collection(db, 'hotelRegistration')
    const auth = getAuth()
    const location=useLocation()
    let hotelfields=location.state
    console.log(hotelfields)
    const navigation=useNavigate()
    

    useEffect(() => {

        //check admin
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser.email === 'admin@gmail.com') {
                setIsLogin(true)

            } else {
                setIsLogin(false)

            }
        });

        if(hotelfields){

            setupdateField(hotelfields)
        }
     
       
    }, [])

    let addData = async () => {
        await addDoc(hotelCollectionRef, { name, services, price, room, country, contact, hotelImgUrl })
        setName('')
        setservices('')
        setPrice('')
        setRoom('')
        setCountry('')
        setContact('')
        setHotelImgUrl('')
        navigation('/hotelregistration')

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

        navigation('/hotelregistration')

    }

    let setupdateField = (hotelfields) => {
        // console.log(hotelfields)
        setupdateHotelID(hotelfields.id)
        setName(hotelfields.name)
        setservices(hotelfields.services)
        setPrice(hotelfields.price)
        setRoom(hotelfields.room)
        setContact(hotelfields.contact)
        setCountry(hotelfields.country)
        setHotelImgUrl(hotelfields.hotelImgUrl)
        setBtnControll(false)

          
    }


    return (
        <>
             <div>
                {isLogin === true ? <AdminNavbar /> : <Navbar1 />}
                <h1 className='p-3 bg-dark text-white'>  Hotel Registration</h1>
            </div>


            <Paper sx={{ width: '40%', overflow: 'hidden', margin: 'auto', padding: '10px' }} elevation={12}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField style={{width:'90%'}} value={name} id="outlined-search" label="Name" type="Text" onChange={(e) => setName(e.target.value)} />
                    <TextField style={{width:'90%'}} value={services} id="outlined-search" label="Services" type="services" onChange={(e) => setservices(e.target.value)} />
                    <TextField style={{width:'90%'}} value={price} id="outlined-search" label="Price per day" type="text" onChange={(e) => setPrice(e.target.value)} />
                    <TextField style={{width:'90%'}} value={room} id="outlined-search" label="Room" type="text" onChange={(e) => setRoom(e.target.value)} />
                    <TextField style={{width:'90%'}} value={country} id="outlined-search" label="Country" type="text" onChange={(e) => setCountry(e.target.value)} />
                    <TextField style={{width:'90%'}} value={contact} id="outlined-search" label="Contact" type="text" onChange={(e) => setContact(e.target.value)} />
                    <TextField style={{width:'90%'}} value={hotelImgUrl} id="outlined-search" label="image url" type="text" onChange={(e) => setHotelImgUrl(e.target.value)} />
                    {btnControll ? <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={addData}><AddRounded />ADD</Button>
                        : <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={updatehotel}><AddRounded />Update</Button>}

                </Box>
            </Paper>
        </>
    )
}
