import React, {useEffect, useState} from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteShipmentApi, getAllShipmentsRequest, UpdateShipment } from '../Apis/Apis';

const ShippingTableRows = () => {
    //database data 
    const [data, setData] = useState([]);
    //update modal
    const [openUpdateShipment, setOpenUpdateShipment] = React.useState(false);
    const handleOpenUpdateShipment = () => setOpenUpdateShipment(true);
    //when the home page load
    useEffect(() => {
        getAllShipmentsRequest({data,setData});    
    },[]);

  return (
    <TableBody>
        {    //each object inside the reponse json object
            Array.from(data).map((item) => (
                <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">{item.paybill}</TableCell>
                    <TableCell align="right">{item.customer_name}</TableCell>
                    <TableCell align="right">{item.customer_phone}</TableCell>
                    <TableCell align="right">{item.customer_address}</TableCell>
                    <TableCell align="right"> 
                    {/* edit and delete buttons */}
                    <Button onClick={() => deleteShipmentApi(item.paybill)}><DeleteIcon /></Button>
                    <Button onClick={handleOpenUpdateShipment}><EditIcon /></Button>
                    {/* update shipment component */}
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