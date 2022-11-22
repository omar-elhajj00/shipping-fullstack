import React, {useEffect, useState} from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteShipmentApi, getAllShipmentsRequest } from '../Apis/Apis';
import axios from 'axios';

const ShippingTableRows = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllShipmentsRequest({data,setData});


        
    },[])
    console.warn("result", data); 

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    // console.log(data);
  return (
    <TableBody>
            {
                Array.from(data).map((item) => (
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {item.paybill}  
                        </TableCell>
                        <TableCell align="right">{item.customer_name}</TableCell>
                        <TableCell align="right">{item.customer_phone}</TableCell>
                        <TableCell align="right">{item.customer_address}</TableCell>
                        <TableCell align="right"> 
                            <Button onClick={() => deleteShipmentApi(item.paybill)}><DeleteIcon /></Button>
                            <Button onClick={()=>{}}><EditIcon /></Button>
                        </TableCell>
                    </TableRow>
                    )
                )
            }
            {/* <TableRow> 
            <TableCell component="th" scope="row">
            {row.name}
            </TableCell>
             <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">
                <Button onClick={() => deleteShipmentApi('asdasdfkdjfbkjfdsjkjykilop')}><DeleteIcon /></Button>
                <Button onClick={()=>{}}><EditIcon /></Button>
            </TableCell>
            </TableRow> */}
        
        
    </TableBody>
  )
}

export default ShippingTableRows