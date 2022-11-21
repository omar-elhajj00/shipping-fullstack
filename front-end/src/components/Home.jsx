import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Button } from '@mui/material';


import Navbar from './Navbar';
import ShippingTable from './Table';



const Home = () => {
  
  return (
    // Navbar
    <Box>
      <Navbar />
      {/* table */}
      <ShippingTable />
      
    </Box>
);
  
}

export default Home