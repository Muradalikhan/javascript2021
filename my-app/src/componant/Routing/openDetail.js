import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import { KeyboardArrowLeft, KeyboardArrowLeftRounded } from '@mui/icons-material';








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

  

function Details() {
    let location=useLocation().state
    let navigate=useNavigate()


    let move=()=>{
      navigate('/');
    }

    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 , mixWidth:650}} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="left"><KeyboardArrowLeftRounded onClick={move} /></StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">State</StyledTableCell>
                            <StyledTableCell align="right">Postive</StyledTableCell>
                            <StyledTableCell align="right">ProbableCases</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell  align="right"></TableCell>
                            <TableCell  align="right">{location.date}</TableCell>
                            <TableCell align="right">{location.state}</TableCell>
                            <TableCell align="right">{location.positive}</TableCell>
                            <TableCell align="right">{location.probableCases}</TableCell>
                            


                        </StyledTableRow>
                       
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Details