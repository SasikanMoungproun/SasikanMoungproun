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
  idtour: string,
  nametour: string,
  details: string,
  idlocation: string,
  vdopaths: string,
  imgpaths: string,
  soundpaths: string,
  status: string,
  createdate : string,
) {
  return { idtour, nametour, details, idlocation, vdopaths, imgpaths, soundpaths, status, createdate };
}

const rows = [
  createData('1','สถานีรถไฟศิลาอาสน์', '', '1', '', '','','',''),
  createData('2','อนุสาวรีย์พระยาพิชัยดาบหัก', '', '2', '', '', '', '', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center" >NameTour</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
            <StyledTableCell align="center">IdLocation</StyledTableCell>
            <StyledTableCell align="center">VDO Paths</StyledTableCell>
            <StyledTableCell align="center">IMG Paths</StyledTableCell>
            <StyledTableCell align="center">Sound Paths</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">CreateDate</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idtour}>
              <StyledTableCell component="th" scope="row">
                {row.idtour}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nametour}</StyledTableCell>
              <StyledTableCell align="center">{row.details}</StyledTableCell>
              <StyledTableCell align="center">{row.idlocation}</StyledTableCell>
              <StyledTableCell align="center">{row.vdopaths}</StyledTableCell>
              <StyledTableCell align="center">{row.imgpaths}</StyledTableCell>
              <StyledTableCell align="center">{row.soundpaths}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
              <StyledTableCell align="center">{row.createdate}</StyledTableCell>
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
