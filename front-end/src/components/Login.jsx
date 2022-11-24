import React from "react";
import {Avatar, Button, FormGroup, Grid, Link, Paper, Snackbar, TextField, Typography} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import { useState } from "react";
import {signInApiRequest} from '../Apis/Apis'
import { useNavigate } from "react-router-dom";

const Login = ({handleChange}) => {
    const paperStyle={padding:20, height: '75vh', width:250 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    const inputStyle={margin:10};
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const {email,password} = user;
    //navigation
    const navigate=useNavigate();
    //snackbar functions
    const [snack, setSnack] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'left',
      });
    const { vertical, horizontal, open } = snack;
    const handleClickSnack = () => {
        setSnack({
            ...snack,
          open: true,
        });
      };
      const handleCloseSnack = () => {
        setSnack({
          ...snack,
          open: false,
        });
      };
    //when changin the input values 
    const onInputChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
    }
    //sleep js function
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    // sign in function
    async function signIn() {
        // const users ={username};
        if (user.email===''){
            alert('Email field is empty');
        }
        else if (user.password ===''){
            alert('Password field is empty')
        }
        const results= signInApiRequest(user);
        localStorage.setItem("userInfo",JSON.stringify(results));
        await sleep(400);
        handleClickSnack();
        await sleep(800);
        navigate('./Home');
        ;
    }
    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Login</h2> 
                </Grid>
                <TextField label="Email" placeholder="Enter you Email" name="email" value={email} variant="standard" fullwidth required style={inputStyle} onChange={e=> onInputChange(e)}/>
                <TextField label="Password" placeholder="Enter you Password" name="password" value={password}  type="password" variant="standard" fullwidth required style={inputStyle} onChange={e=> onInputChange(e)}/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" style={inputStyle} />
                </FormGroup>
                <Button type="submit" color="primary" onClick={signIn} variant="contained" fullWidth>Login</Button>
                <Typography style={inputStyle}><Link href="#" onClick={()=>handleChange("event",1)}>Sign Up Here</Link></Typography>       
            </Paper>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleCloseSnack}
                message="logged in successfully"
                key={vertical + horizontal}
            />
        </Grid>
    )
}
export default Login