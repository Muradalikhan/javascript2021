import React from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Navbar1 from '../componant/navbar/navbar1.js'
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import { Box, Paper, TextField } from '@mui/material'


export default function HotelDisplay() {
    let [hotel, setHotel] = useState([])
    let [userLogin, setUserLogin] = useState(false)
    let [searchUser, setSearchUser] = useState('')

    let hotelCollectionRef = collection(db, 'hotelRegistration')
    let navigate = useNavigate('')
    const auth = getAuth();

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                const uid = user.uid;
                console.log('user is Sign in', uid)
                setUserLogin(user.email)
                console.log(userLogin)
                console.log(user)

                if (user.email === 'admin@gmail.com') {
                    navigate('/admin')
                }else {
                    navigate('/dashboard')
                }

            } else {
                console.log('user is sign out ')
                navigate('/dashboard')
            }
        });


        const getHotelsList = async () => {
            const data = await getDocs(hotelCollectionRef)
            setHotel(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getHotelsList();

    }, [navigate])


    let openDetail = (selectedhotel) => {
         navigate('/detail', { state: selectedhotel })
    }

    return (

        <>
            <Navbar1 />
            <Paper sx={{ width: '80%', overflow: 'hidden', margin: '70px auto', padding: '10px' }} elevation={12}>
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


            {hotel.length !== 0 ?
                <div className='col-sm-10 ' style={{ margin: '30px auto' }}>
                    {
                        hotel
                            .filter((hotel, index) => {
                                if (searchUser === '') {
                                    return (
                                        <div className="card p-3" style={{ width: "18rem", boxShadow: '2px 2px 2px #6c757dba', margin: '10px', display: 'inline-block' }} key={index} >
                                            <img src={hotel.hotelImgUrl} className="card-img-top" alt="img" style={{ height: '300px' }} />
                                            <div className="card-body">
                                                <h5 className="card-title" >{hotel.name}</h5>
                                                <p className="card-text">Rooms:{hotel.room}</p>
                                                <p className="card-text">perday: ${hotel.price}</p>
                                                <button className="btn btnColor" onClick={() => openDetail(hotel)}>View Details</button>
                                            </div>
                                        </div>
                                    )
                                }
                                else if (hotel.name.toLowerCase().includes(searchUser.toLowerCase())) {
                                    return (
                                        <div className="card p-3" style={{ width: "18rem", boxShadow: '2px 2px 2px #6c757dba', margin: '10px', display: 'inline-block' }} key={index} >
                                            <img src={hotel.hotelImgUrl} className="card-img-top" alt="img" style={{ height: '300px' }} />
                                            <div className="card-body">
                                                <h5 className="card-title" >{hotel.name}</h5>
                                                <p className="card-text">Rooms:{hotel.room}</p>
                                                <p className="card-text">perday: ${hotel.price}</p>
                                                <button className="btn btnColor" onClick={() => openDetail(hotel)}>View Details</button>
                                            </div>
                                        </div>
                                    )

                                    }
                            })
                            .map((hotel, index) => {
                                return (

                                    <div className="card p-3" style={{ width: "18rem", boxShadow: '2px 2px 2px #6c757dba', margin: '10px', display: 'inline-block' }} key={index} >
                                        <img src={hotel.hotelImgUrl} className="card-img-top" alt="img" style={{ height: '300px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title" >{hotel.name}</h5>
                                            <p className="card-text">Rooms:{hotel.room}</p>
                                            <p className="card-text">perday: ${hotel.price}</p>
                                            <button className="btn btnColor" onClick={() => openDetail(hotel)}>View Details</button>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
                :
                <div className="lds-ellipsis centerOfpage"><div></div><div></div><div></div><div></div></div>
            }


        </>




















    )
}