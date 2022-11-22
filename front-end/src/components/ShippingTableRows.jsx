import React, {useEffect, useState} from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteShipmentApi, getAllShipmentsRequest } from '../Apis/Apis';

const ShippingTableRows = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        let results= getAllShipmentsRequest();
        setData(results);
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
    console.log(data);
    

  return (
    <TableBody>
        
            {
                data.map((item)=>
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        debugger
                        <TableCell component="th" scope="row">
                            {item.paybill}
                        </TableCell>
                        <TableCell align="right">{item[1]}</TableCell>
                        <TableCell align="right">{item[2]}</TableCell>
                        <TableCell align="right">{item[3]}</TableCell>
                        <TableCell align="right"> 
                            <Button onClick={() => deleteShipmentApi('asdasdfkdjfbkjfdsjkjykilop')}><DeleteIcon /></Button>
                            <Button onClick={()=>{}}><EditIcon /></Button>
                        </TableCell>
                    </TableRow>
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