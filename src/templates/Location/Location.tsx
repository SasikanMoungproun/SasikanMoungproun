import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

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

function createData(
  idlocation: string,
  namelocation: string,
  latitude: string,
  longtitude: string,
  time: string,
  status : string,
  createdate : string,
) {
  return { idlocation, namelocation, latitude, longtitude, time, status, createdate };
}

const rows = [
  createData('1','ศิลาอาสน์', '', '', '10.10', '',''),
  createData('2','', '', '', '', '',''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>NameLocation</StyledTableCell>
            <StyledTableCell>Latitude</StyledTableCell>
            <StyledTableCell>Longtitude</StyledTableCell>
            <StyledTableCell>Time</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>CreateDate</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idlocation}>
              <StyledTableCell component="th" scope="row">
                {row.idlocation}
              </StyledTableCell>
              <StyledTableCell>{row.namelocation}</StyledTableCell>
              <StyledTableCell>{row.latitude}</StyledTableCell>
              <StyledTableCell>{row.longtitude}</StyledTableCell>
              <StyledTableCell>{row.time}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.createdate}</StyledTableCell>
              <StyledTableCell align="center">
                <Button size="small" variant="contained" color="success">Edit</Button>
                <Button size="small" variant="contained" color="error">Del</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
