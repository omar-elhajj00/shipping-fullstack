import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import ShippingTableHead from './ShippingTableHead';
import ShippingTableRows from './ShippingTableRows';

const ShippingTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <ShippingTableHead />
        <ShippingTableRows />
      </Table>
    </TableContainer>
  )
}

export default ShippingTable