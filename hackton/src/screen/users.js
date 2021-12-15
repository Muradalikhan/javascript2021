

import { useEffect, useState } from 'react'
import { db } from '../config/firebase/firebase.js'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { getAuth,onAuthStateChanged } from 'firebase/auth';


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





function Users() {
    let [updateUserID, setUpdateUserID] = useState('')
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [contact, setContact] = useState('')
    let [country, setCountry] = useState('')
    let [searchUser, setSearchUser] = useState('')
    let [user, setUser] = useState([])
    let [btnControll, setBtnControll] = useState(true)
    let [isLogin, setIsLogin] = useState(false)
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);

    //database refrence
    let userCollectionRef = collection(db, 'users')
    const auth=getAuth();

    useEffect(() => {


             //check admin
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser.email === 'admin@gmail.com') {
                setIsLogin(true)

            } else {
                setIsLogin(false)

            }
        });








        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUser(data.docs.map((doc,index) => ({ ...doc.data(), id: doc.id,key:index })))
        }

        getUsers();
    }, [user])


    //add data 
    let addData = async () => {
        await addDoc(userCollectionRef, { name, email, country, contact })
        setName('')
        setEmail('')
        setCountry('')
        setContact('')
    }

    //update data
    let updateUser = async () => {
        const userDoc = doc(db, 'users', updateUserID)
        const updatedField = { name: name, email: email, contact: contact, country: country }
        await updateDoc(userDoc, updatedField)


        setName('')
        setEmail('')
        setContact('')
        setCountry('')
        setBtnControll(true)

    }

    let setupdateField = (id, name, email, country, contact) => {
        setUpdateUserID(id)
        setName(name)
        setEmail(email)
        setContact(contact)
        setCountry(country)
        setBtnControll(false)


    }

    //delte data
    let deleteUser = (id) => {
        const userDoc = doc(db, 'users', id)
        deleteDoc(userDoc)
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
            {isLogin===true ? <AdminNavbar /> : <Navbar1 />}
                <h1 className="p-3 bg-dark text-white">  Users</h1>
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
                    <TextField value={email} id="outlined-search" label="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <TextField value={country} id="outlined-search" label="Country" type="text" onChange={(e) => setCountry(e.target.value)} />
                    <TextField value={contact} id="outlined-search" label="Contact" type="text" onChange={(e) => setContact(e.target.value)} />
                    <TextField value={searchUser} id="outlined-search" label="Search by name" type="text" onChange={(e) => setSearchUser(e.target.value)} />
                    {btnControll ? <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={addData}><AddRounded />ADD</Button>
                        : <Button variant='contained' size='large' sx={{ width: 120, marginTop: 2 }} onClick={updateUser}><AddRounded />Update</Button>}

                </Box>
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
                                                        {user.country}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.contact}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(user.id, user.name, user.email, user.country, user.contact) }}><Edit /></Button>
                                                        <Button variant='contained' color='error' size="small" onClick={() => deleteUser(user.id)}> <Delete /></Button>
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
                                                        {user.country}
                                                    </TableCell>
                                                    <TableCell align={user.align}>
                                                        {user.contact}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(user.id, user.name, user.email, user.country, user.contact) }}><Edit /></Button>
                                                        <Button variant='contained' color='error' size="small" onClick={() => deleteUser(user.id)}> <Delete /></Button>
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
                                                    {user.country}
                                                </TableCell>
                                                <TableCell align={user.align}>
                                                    {user.contact}
                                                </TableCell>
                                                <TableCell>
                                                    <Button variant='contained' color='success' size="small" onClick={() => { setupdateField(user.id, user.name, user.email, user.country, user.contact) }}><Edit /></Button>
                                                    <Button variant='contained' color='error' size="small" onClick={() => deleteUser(user.id)}> <Delete /></Button>
                                                </TableCell>

                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                    </Table>
                </TableContainer>
                            :
                            <div style={{ width:'100%',textAlign:'center' }}>
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

export default Users