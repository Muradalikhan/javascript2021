import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router';
import { styled } from '@mui/material/styles';








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
    

    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 , mixWidth:650}} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align="right">State</StyledTableCell>
                            <StyledTableCell align="right">Positive</StyledTableCell>
                            <StyledTableCell align="right">ProbaleCases</StyledTableCell>
                            <StyledTableCell align="right">Negative</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <TableCell component="th" scope="row">
                                {location.date}
                            </TableCell>
                            <TableCell align="right">{location.state}</TableCell>
                            <TableCell align="right">{location.positive}</TableCell>
                            <TableCell align="right">{location.probableCases}</TableCell>
                            {/* <TableCell align="right">{dt.negative}</TableCell> */}


                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Details