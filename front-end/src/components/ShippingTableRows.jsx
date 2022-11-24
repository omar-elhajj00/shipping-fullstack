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
    const handleOpenUpdateShipment = (item) => setOpenUpdateShipment(true);

    useEffect(() => {
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
                            <Button onClick={handleOpenUpdateShipment}><EditIcon /></Button>
                            <UpdateShipment open={openUpdateShipment} setOpen={setOpenUpdateShipment} shipmentInfo={item} />
                        </TableCell>
                    </TableRow>
                    )
                )
            }
    </TableBody>
  )
}

export default ShippingTableRows