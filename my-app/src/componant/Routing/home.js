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

  let navigate = useNavigate()


  let logout = () => {

    signOut(auth)
    navigate('/login', { replace: true })
  }

  let fetchData = () => {
    setTimeout(() => {

      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(dt => {

          setData(dt)
          console.log(data)

        }

        )

    },2000)

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
              <TableCell>ID</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>ID</TableCell>
              <TableCell align="right">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, index) => (
              <TableRow
                key={dt.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {dt.id}
                </TableCell>
                <TableCell align="right">{dt.completed}</TableCell>
                <TableCell align="right">{dt.title}</TableCell>
                <TableCell align="right">{dt.userId}</TableCell>
                <TableCell align="right"></TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
export default Home;