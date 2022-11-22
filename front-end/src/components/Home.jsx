import React, { useEffect, useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Button } from '@mui/material';



import Navbar from './Navbar';
import ShippingTable from './ShippingTable';
import { getAllShipmentsRequest } from '../Apis/Apis';



const Home = () => {
  
  

  return (
    // Navbar
    <Box>
      <Navbar />
      {/* table */}
      <ShippingTable/>
      
    </Box>
);
  
}

export default Home