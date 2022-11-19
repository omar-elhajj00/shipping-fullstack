import React from "react";
import {Avatar, Button, FormGroup, Grid, Link, Paper, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";


const Login = () => {
    const paperStyle={padding:20, height: '75vh', width:250 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    const inputStyle={margin:10};

    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2> 
                </Grid>
                
                <TextField label="Email" placeholder="Enter you Email" variant="standard" fullwidth required style={inputStyle}/>
                <TextField label="Password" placeholder="Enter you Password" type="password" variant="standard" fullwidth required style={inputStyle}/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={inputStyle} />
                </FormGroup>
                <Button type="submit" color="primary" variant="contained" fullWidth>Login</Button>
                <Typography style={inputStyle}><Link href="#">Sign Up Here</Link></Typography>       
            </Paper>
        </Grid>
    )
}
export default Login