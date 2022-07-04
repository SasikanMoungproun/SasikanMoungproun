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
import Link from 'next/link';

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
  iduser: string,
  fullname: string,
  email: string,
  username: string,
  password: string,
  position: string,
  lastlogin: string,
  socialID: string,
  socialtype: string,
  createdate: string,
) {
  return { iduser, fullname, email, username, password, position, lastlogin, socialID, socialtype, createdate };
}

const rows = [
  createData('1', 'Sasikan', 'beem@gmail.com', 'Sisa', '1234', 'admin', '', '', '', '20/06/22'),
  createData('2', 'Wichet', 'toey@gmail.com', 'Toey', '5678', 'admin', '', '', '', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Username</StyledTableCell>
            <StyledTableCell align="right">Password</StyledTableCell>
            <StyledTableCell align="right">Position</StyledTableCell>
            <StyledTableCell align="right">Last login</StyledTableCell>
            <StyledTableCell align="right">Social ID</StyledTableCell>
            <StyledTableCell align="right">Social type</StyledTableCell>
            <StyledTableCell align="right">CreatDate</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.iduser}>
              <StyledTableCell component="th" scope="row">
                {row.iduser}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fullname}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.username}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
              <StyledTableCell align="right">{row.position}</StyledTableCell>
              <StyledTableCell align="right">{row.lastlogin}</StyledTableCell>
              <StyledTableCell align="right">{row.socialID}</StyledTableCell>
              <StyledTableCell align="right">{row.socialtype}</StyledTableCell>
              <StyledTableCell align="right">{row.createdate}</StyledTableCell>
              <StyledTableCell align="center">
                <Link href='/account/edit'>
                  <Button size="small" variant="contained" color="success">Edit</Button>
                </Link>
                <Button size="small" variant="contained" color="error" >Del</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
