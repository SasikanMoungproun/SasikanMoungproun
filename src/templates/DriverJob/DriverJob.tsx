import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  idDriverjob: string,
  idbus: string,
  iduser: string,
  startdate: string,
  enddate: string,
  status: string,
  createdate : string,
) {
  return { idDriverjob ,idbus, iduser, startdate, enddate, status, createdate };
}

const rows = [
  createData( '1','1', '1', '12.30', '16.00', 'ทำงาน', ''),
  createData( '2','5', '5', '15.11', '20.00', 'ทำงาน', '')
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>IdDriverjob</StyledTableCell>
            <StyledTableCell align="right">IdBus</StyledTableCell>
            <StyledTableCell align="right">IdUser</StyledTableCell>
            <StyledTableCell align="right">Startdate</StyledTableCell>
            <StyledTableCell align="right">Enddate</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Createdate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idDriverjob}>
              <StyledTableCell component="th" scope="row">
                {row.idDriverjob}
              </StyledTableCell>
              <StyledTableCell align="right">{row.idbus}</StyledTableCell>
              <StyledTableCell align="right">{row.iduser}</StyledTableCell>
              <StyledTableCell align="right">{row.startdate}</StyledTableCell>
              <StyledTableCell align="right">{row.enddate}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.createdate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
