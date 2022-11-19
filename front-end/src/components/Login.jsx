import React from "react";
import {Avatar, Button, FormGroup, Grid, Paper, TextField} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";


const Login = () => {
    const paperStyle={padding:20, height: '70vh', width:200 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    const inputStyle={margin:10};
    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2> 
                </Grid>
                
                <TextField label="Username" placeholder="Enter you username" variant="standard" fullwidth required style={inputStyle}/>
                <TextField label="Password" placeholder="Enter you username" type="password" variant="standard" fullwidth required style={inputStyle}/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={inputStyle} />
                </FormGroup>
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign in</Button>

                
            </Paper>
        </Grid>
    )
}

export default Login