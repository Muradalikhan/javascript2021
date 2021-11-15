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
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect } from 'react';
import TablePagination from '@mui/material/TablePagination';

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

  useEffect(()=>{
    fetchData()
  },[])

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




  const ITEM_HEIGHT = 48;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <h1>Fetch Data from fake APi</h1>


      <Grid container xs={12} md={10} className='mx-auto'>
        <Grid item xs={12} sm={7}  md={5}>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls="demo-customized-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              fullWidth
            >
              Fetch Data through specific colomn
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              }}
            >
              {data.map((option,index) => (
                <MenuItem key={index} selected={option === 'Pyxis'} onClick={handleClose}>
                  {option.state}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Button variant='contained'
            onClick={fetchData}
            fullWidth
          >
            Fetch All Data
          </Button>
        </Grid>
        <Grid item xs={12} sm={2} md={3} >
          <Button variant='contained'
            onClick={logout}
            fullWidth
          >
            Sign out
          </Button>
        </Grid>


    


      <TableContainer component={Paper} className='mx-auto' >
        <Table sx={{ minWidth: 400 }} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">State</StyledTableCell>
              <StyledTableCell align="center">positive</StyledTableCell>
              <StyledTableCell align="center">probableCases</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, index) => (
              <StyledTableRow onClick={() => openDetails(dt)}
                key={index}
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
             <TablePagination rowsPerPageOptions={[10, 50]} />
          </TableBody>
        </Table>
      </TableContainer>

      </Grid>

    </>
  );
}
export default Home;