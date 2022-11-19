import React from "react";
import {Avatar, Button, FormGroup, Grid, Paper, TextField} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";

const SignUp = () => {
    const paperStyle={padding:20, width:250 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    const inputStyle={margin:10};

    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><AddCircleIcon /></Avatar>
                    <h2>Sign Up</h2> 
                </Grid>
                
                <TextField label="Full Name" placeholder="Fist name, last name" variant="standard" fullwidth required style={inputStyle}/>
                <TextField label="Email" placeholder="Enter you Email" variant="standard" fullwidth required style={inputStyle}/>
                <TextField label="Phone number" type="number" placeholder="Enter you Phone number" variant="standard" fullwidth required style={inputStyle}/>
                <TextField label="Password" placeholder="Enter you username" type="password" variant="standard" fullwidth required style={inputStyle}/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="I accept the terms and conditions" style={inputStyle} />
                </FormGroup>
                <Button type="submit" color="primary" variant="contained" fullWidth>Sign Up</Button>            
            </Paper>
        </Grid>
    )
}

export default SignUp