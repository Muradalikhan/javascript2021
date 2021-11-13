import 'bootstrap-4-react'
import { Button, Grid } from "@mui/material";
import { signOut } from "firebase/auth";
import auth from "./firebase/firebase";
import { useNavigate } from "react-router";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

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

  let openDetails = (item) => {
    console.log(item)

    setOpenDetail(item)

    navigate('/openDetail', { state: item })

  }



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  return (
    <>
      <h1>Fetch Data from fake APi</h1>


      <Grid container >
        <Grid item md={3}>
          <div class="dropdown">
            <button width='100px' class="btn btn-primary dropdown-toggle" data-toggle="dropdown" >
              Dropdown button
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Link 1</a>
              <a class="dropdown-item" href="#">Link 2</a>
              <a class="dropdown-item" href="#">Link 3</a>
            </div>
          </div>
        </Grid>
        <Grid item  md={3}>
          <Button variant='contained'
            onClick={fetchData}
            fullWidth
          >
            Fetch Data
          </Button>
        </Grid>
        <Grid item  md={3} >
          <Button variant='contained'
            onClick={logout}
            fullWidth
          >
            Sign out
          </Button>
        </Grid>
      </Grid>









      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">Positive</StyledTableCell>
              <StyledTableCell align="center">ProbaleCases</StyledTableCell>
              <StyledTableCell align="center">Negative</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, index) => (
              <StyledTableRow onClick={() => openDetails(dt)}
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


              </StyledTableRow >
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </>
  );
}
export default Home;