import React from "react";
import {Avatar, Grid, Paper} from '@mui/material';

const Login = () => {
    const paperStyle={padding:20, height: '70vh', width:200 ,margin: '20px auto'};

    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Avatar></Avatar>
                login</Paper>
        </Grid>
    )
}

export default Login