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
  idbusstop: string,
  namebusstop: string,
  idlocation: string,
  status: string,
  createdate: string,
) {
  return { idbusstop, namebusstop, idlocation, status, createdate };
}

const rows = [
  createData('1', 'สถานีรถไฟศิลาอาสน์', '1', '', ''),
  createData('2', 'อนุสาวรีย์พระยาพิชัยดาบหัก', '2', '', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>NameBusStop</StyledTableCell>
            <StyledTableCell>IdLocation</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>CerateDate</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idbusstop}>
              <StyledTableCell component="th" scope="row">
                {row.idbusstop}
              </StyledTableCell>
              <StyledTableCell>{row.namebusstop}</StyledTableCell>
              <StyledTableCell>{row.idlocation}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.createdate}</StyledTableCell>
              <StyledTableCell align="center">
                <Button variant="contained" color="success">Edit</Button>
                <Button variant="contained" color="error">Del</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
