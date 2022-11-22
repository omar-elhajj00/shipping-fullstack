import React from 'react';
import {TableRow, TableCell, TableHead} from '@mui/material';

const ShippingTableHead = () => {
  return (
    <TableHead>
        <TableRow>
            <TableCell>PayBill</TableCell>
            <TableCell align="right">Customer name&nbsp;</TableCell>
            <TableCell align="right">Customer&nbsp;Phone</TableCell>
            <TableCell align="right">Customer&nbsp;Address</TableCell>
            <TableCell align="right">Delete/ Edit</TableCell>
        </TableRow>
    </TableHead>
  )
}

export default ShippingTableHead