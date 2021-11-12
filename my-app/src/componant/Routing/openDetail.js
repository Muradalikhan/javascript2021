import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router';

function Details() {
    let location=useLocation().state
    

    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 , mixWidth:650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">State</TableCell>
                            <TableCell align="right">Positive</TableCell>
                            <TableCell align="right">ProbaleCases</TableCell>
                            <TableCell align="right">Negative</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {location.date}
                            </TableCell>
                            <TableCell align="right">{location.state}</TableCell>
                            <TableCell align="right">{location.positive}</TableCell>
                            <TableCell align="right">{location.probableCases}</TableCell>
                            {/* <TableCell align="right">{dt.negative}</TableCell> */}


                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Details