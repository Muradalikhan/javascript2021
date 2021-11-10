import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import {signOut } from "firebase/auth";
import auth from "./firebase/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
  let [data,setData]=useState('')

  let navigate=useNavigate()


  let logout=()=>{
    
    signOut(auth)
    navigate('/login',{replace:true})
  }

  let fetchData=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(dt => {

      console.log(dt)
      setData(dt.id)

    }
    
    )
  }



  return (
    <>
      <h1>Home</h1>

      <Button variant='contained'
        onClick={fetchData}
      >
        Fetch Data
      </Button>
      <Button variant='contained'
        onClick={logout}
      >
        Sign out
      </Button>
      


      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((dt) => (
            <TableRow
              key={dt.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dt.title}
              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>
  );
}
export default Home;