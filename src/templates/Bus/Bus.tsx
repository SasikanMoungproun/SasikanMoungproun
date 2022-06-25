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
  idbus: number,
  model: string,
  licensePalate: string,
  brand: string,
  color: string,
  date : string,
) {
  return { idbus, model, licensePalate, brand, color, date };
}

const rows = [
  createData(1,'EV', 'B1122', 'Honda', 'ชมพู', ''),
  createData(2,'y', '234', 'Honda', 'เขียว', ''),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Model</StyledTableCell>
            <StyledTableCell align="right">Palate</StyledTableCell>
            <StyledTableCell align="right">Brand</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.idbus}>
              <StyledTableCell component="th" scope="row">
                {row.idbus}
              </StyledTableCell>
              <StyledTableCell align="right">{row.model}</StyledTableCell>
              <StyledTableCell align="right">{row.licensePalate}</StyledTableCell>
              <StyledTableCell align="right">{row.brand}</StyledTableCell>
              <StyledTableCell align="right">{row.color}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
