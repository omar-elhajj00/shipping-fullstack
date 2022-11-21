import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 6 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shipments
          </Typography>
          <Button color="inherit">Create</Button>
          <Button color="inherit">Logout</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar