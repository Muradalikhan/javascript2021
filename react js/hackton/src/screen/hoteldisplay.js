import React from 'react'
import { useNavigate } from 'react-router-dom'
// database
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Navbar1 from '../componant/navbar/navbar1.js'
import { getAuth, onAuthStateChanged } from '../config/firebase/firebase.js'
import { Box, Paper, TextField } from '@mui/material'
import '../componant/card/card3'
// import MyCarosol from '../componant/carosol/MyCarosol.js'
import MyCarosol2 from '../componant/carosol/muiCarosol.js'






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
                } else {
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
            <div style={{marginTop:'70px'}}></div>
            <MyCarosol2/>
            <Paper sx={{ width: '80%', overflow: 'hidden', margin: '4px auto', padding: '10px', zIndex: '2' }} elevation={12}>
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
                <div className='col-sm-10 ' style={{ margin: '20px auto' }}>
                    {
                        hotel
                            .filter((hotel, index) => {
                                if (searchUser === '') {
                                    return (
                                        <div className="card" key={index}>
                                        <img src={hotel.hotelImgUrl} className="card-img-top" />
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
                                        <div className="card" key={index}>
                                            <img src={hotel.hotelImgUrl} className="card-img-top" />
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

                                    <div className="card" key={index}>
                                        <img src={hotel.hotelImgUrl} className="card-img-top" />
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