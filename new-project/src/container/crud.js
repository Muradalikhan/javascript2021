

import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button } from '@mui/material'
import { deleteUser } from '@firebase/auth'

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
import TextField from '@mui/material/TextField';
//import icon from mui
import { Add, AddRounded, Delete, Edit } from '@mui/icons-material'











function Crud() {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [age, setAge] = useState('')
    let [user, setUser] = useState([])
    let [page, setPage] = React.useState(0);
    let [rowsPerPage, setRowsPerPage] = React.useState(10);

    //database refrence
    let userCollectionRef = collection(db, 'user')

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUsers();
    })


    //add data 
    let addData = async () => {
        await addDoc(userCollectionRef, { name, email, age })
        setName('')
        setEmail('')
        setAge('')
    }

    //update data
    let updateUser = async (id, age) => {
        const userDoc = doc(db, 'user', id)
        const updatedField = { age: age + 1 }
        await updateDoc(userDoc, updatedField)
    }

    //delte data
    let deleteUser = (id) => {
        const userDoc = doc(db, 'user', id)
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
            <h1>  Crud operation</h1>
           <Paper  sx={{ width: '80%', overflow: 'hidden', margin: 'auto' ,padding:'10px' }} elevation={12}>
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
                <TextField value={age} id="outlined-search" label="Age" type="Number" onChange={(e) => setAge(e.target.value)} />
                <Button variant='contained' size='large' sx={{width:90,marginTop:2}} onClick={addData}><AddRounded />Add</Button>
            </Box>
           </Paper>


            <Paper sx={{ width: '80%', overflow: 'hidden', margin: 'auto'  ,padding:'10px' }} elevation={12}>
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
                                    <b>Age</b>
                                </TableCell>
                                <TableCell>
                                    <b>Action</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                                                {user.age}
                                            </TableCell>
                                            <TableCell>
                                                <Button variant='contained' color='success' size="small" onClick={() => { updateUser(user.id, user.age) }}><Edit /></Button>
                                                <Button variant='contained' color='error' size="small" onClick={() => deleteUser(user.id)}> <Delete /></Button>
                                            </TableCell>

                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
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

export default Crud