import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

import CreateShipment from './CreateShipment';

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const user= JSON.parse(localStorage.getItem("userInfo"));

    const navigate = useNavigate();

    const logout = () => {
      localStorage.clear();
      navigate("/");
    }

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
            Shipments {user.name}
          </Typography>
          <Button color="inherit" onClick={handleOpen}>Create</Button>
          <CreateShipment open={open} setOpen={setOpen} />
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar