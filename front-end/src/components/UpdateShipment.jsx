import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {updateShipmentApi} from '../Apis/Apis'


const UpdateShipment = ({open,setOpen,shipmentInfo}) => {
  // console.warn(shipmentInfo);
    // debugger
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      //shipment state 
      const [shipment, setShipment]=useState({
        shipmentId: shipmentInfo.id,
        paybill: shipmentInfo.paybill,  
        customerName: shipmentInfo.customer_name,
        customerAddress: shipmentInfo.customer_address,
        customerPhone: shipmentInfo.customer_phone
      });

      const {shipmentId, paybill, customerName, customerAddress, customerPhone} = shipment;
      // debugger
      //when one of the input changes
      const onInputChange = (e) => {
        setShipment({...shipment, [e.target.name]: e.target.value});
      }
      

    const handleClose = () => setOpen(false);
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style} >
            <Grid direction={'row'} container justifyContent="space-between">
                <Grid item xs={6}>
                    <Tooltip placement="right-start">
                        <Typography id="modal-modal-title" variant='h6' component="h2" sx={{ mb:1 }} >
                            Update Shipment
                        </Typography>   
                        
                    </Tooltip>
                </Grid>
                <Grid item alignItems="flex-end">
                    <Tooltip placement="right-end">
                        <Button onClick={handleClose}><CloseIcon /></Button>
                    </Tooltip>
                </Grid>
            </Grid>
            <TextField id="standard-basic" label="paybill" variant="standard" placeholder='PayBill' sx={{ mb: 2 }} fullWidth name="paybill" value={paybill} onChange={e => onInputChange(e)} required/>
            <TextField id="standard-basic" label="customer name" variant="standard" placeholder='customer name ' sx={{ mb: 2 }} fullWidth name="customerName" value={customerName} onChange={e => onInputChange(e)} required/>
            <TextField id="standard-basic" label="customer address" variant="standard" placeholder='customer address' sx={{ mb: 2 }} fullWidth name="customerAddress" value={customerAddress} onChange={e => onInputChange(e)} required/>
            <TextField id="standard-basic" label="customer phone number" variant="standard" placeholder='customer phone number' sx={{ mb: 2 }} fullWidth name="customerPhone" value={customerPhone} onChange={e => onInputChange(e)} required/>
            <Button variant="contained" size="large" onClick={() => updateShipmentApi(shipment)}>Update</Button>
        </Box>
      </Modal>  
  )
}

export default UpdateShipment