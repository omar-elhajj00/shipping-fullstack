import React, {useEffect, useState} from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteShipmentApi, getAllShipmentsRequest } from '../Apis/Apis';
import axios from 'axios';

import UpdateShipment from './UpdateShipment';

const ShippingTableRows = () => {
    const [data, setData] = useState([]);
    const [openUpdateShipment, setOpenUpdateShipment] = React.useState(false);
    const handleOpenUpdateShipment = () => setOpenUpdateShipment(true);

    useEffect(() => {
        // async function getShipments(){
        //     let results= await fetch("http://127.0.0.1:8000/api/showShipments");
        //         // .then(response=>console.log(response.data))
        //         // .catch(error =>console.log(error));
        //     results = await results.json();
        //     setData(results);
        // }
        // getShipments();
        getAllShipmentsRequest({data,setData});
        
            
        
    },[]);
    
    console.warn("result", data); 

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
                            <Button onClick={() => handleOpenUpdateShipment({openUpdateShipment,setOpenUpdateShipment},item)}><EditIcon /></Button>
                            <UpdateShipment open={openUpdateShipment} setOpen={setOpenUpdateShipment} />
                        </TableCell>
                    </TableRow>
                    )
                )
            }
    </TableBody>
  )
}

export default ShippingTableRows