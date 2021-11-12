import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
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
  let [data, setData] = useState([])
  let [openDetail, setOpenDetail] = useState('')

  let navigate = useNavigate()


  let logout = () => {

    signOut(auth)
    navigate('/login', { replace: true })
  }

  let fetchData = () => {
 
      fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(response => response.json())
        .then(dt => {

          setData(dt)
          console.log(data)

        })
  }

let openDetails=(item)=>{
  console.log(item)

  setOpenDetail(item)

  navigate('/openDetail',{state:item})

}

  return (
    <>
      <h1>Fetch Data from fake APi</h1>

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
              
              <TableCell align="center">State</TableCell>
              <TableCell align="center">Positive</TableCell>
              <TableCell align="center">ProbaleCases</TableCell>
              <TableCell align="center">Negative</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, index) => (
              <TableRow onClick={()=>openDetails(dt)}
                key={dt.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {dt.date}
                </TableCell>
                <TableCell align="center">{dt.state}</TableCell>
                <TableCell align="center">{dt.positive}</TableCell>
                <TableCell align="center">{dt.probableCases}</TableCell>
                {/* <TableCell align="right">{dt.negative}</TableCell> */}


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
export default Home;