import React from 'react'
import { Box } from '@mui/material';

import Navbar from './Navbar';
import ShippingTable from './ShippingTable';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <ShippingTable/>
    </Box>
);
  
}

export default Home