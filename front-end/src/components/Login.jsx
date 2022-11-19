import React from "react";
import {Avatar, Grid, Paper, TextField} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


const Login = () => {
    const paperStyle={padding:20, height: '70vh', width:200 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2> 
                </Grid>
                <TextField id="standard-basic" label="Username" placeholder="HAHA" />
                
            </Paper>
        </Grid>
    )
}

export default Login