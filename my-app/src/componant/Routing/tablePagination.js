
import * as React from 'react';
import 'bootstrap-4-react'
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import InfoBoard from './InfoBoard';
import Grid from '@mui/material/Grid'
import InputField from './InputField';
import TextField from '@mui/material/TextField';



function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};





export default function PaginationTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [data, setData] = useState([])
    const [currency, setCurrency] = useState(' ');





    let getData = () => {
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(resp => resp.json())
            .then(resp => {

                console.log(resp)
                setData(resp)
            })
    }

    useEffect(() => {
        getData()
    }, [])



    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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

    const handleChangeSelect = (event) => {
        setCurrency(event.target.value);
    };

    return (

        <div className='text-center mx-auto w-75' >
            <Paper elevation={12} className='p-2 my-2 '>
                <Grid container>
                    <Grid md={8}>
                        <InfoBoard />
                        <InfoBoard />
                        <InfoBoard />
                        <InfoBoard />

                    </Grid>
                    <Grid md={4}>
                        <div className='m-3'>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                label="Select by State"
                                value={currency}
                                onChange={handleChangeSelect}
                                SelectProps={{
                                    native: true,
                                }}
                                helperText="select by choosing state"
                            >
                                {data.map((option, index) => (
                                    <option key={index} value={option.state}>
                                        {option.state}
                                    </option>
                                ))}
                            </TextField>

                        </div>
                        {/* <InputField/>   
                     <InputField/>    */}
                    </Grid>

                </Grid>

            </Paper>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>

                        <StyledTableRow>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">State</StyledTableCell>
                            <StyledTableCell align="center">positive</StyledTableCell>
                            <StyledTableCell align="center">recoverd</StyledTableCell>
                            <StyledTableCell align="center">Death</StyledTableCell>
                            <StyledTableCell align="center">Hospitalized</StyledTableCell>

                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                        ).map((row) => (
                            <TableRow key={row.date}>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.date}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.state}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.positive}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.recovered}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.death}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.hospitalized}
                                </TableCell>

                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={6}
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </div>
    );
}
