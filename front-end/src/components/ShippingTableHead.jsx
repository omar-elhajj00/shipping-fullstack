import React from 'react';
import {TableRow, TableCell, TableHead} from '@mui/material';

const ShippingTableHead = () => {
  return (
    <TableHead>
        <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
    </TableHead>
  )
}

export default ShippingTableHead