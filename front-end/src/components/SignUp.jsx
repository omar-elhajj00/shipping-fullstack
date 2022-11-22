import React, {useState} from "react";
import {Avatar, Button, FormGroup, Grid, Paper, TextField} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {useNavigate, Route, Routes} from 'react-router-dom';
import {signUpApi} from '../Apis/Apis.js';

const SignUp = () => {
    const paperStyle={padding:20, width:250 ,margin: '20px auto'};
    const avatartStyle={backgroundColor:'green'};
    const inputStyle={margin:10};

    const navigate= useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber:"",
        password: ""
    });
    const {name, email,phoneNumber, password} =user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const signUpOperation = () => {
        // const history = useHistory();
        const signUpReq =signUpApi(user);
        localStorage.setItem('userInfo',signUpReq);
        navigate("./Home");
    }
    
    return(
        <Grid>
            <Paper elevation={1} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatartStyle}><AddCircleIcon /></Avatar>
                    <h2>Sign Up</h2> 
                </Grid>
                <TextField label="Full Name" placeholder="Fist name, last name" name="name" value= {name} variant="standard" fullwidth required style={inputStyle} onChange={e => onInputChange(e)}/>
                <TextField label="Email" placeholder="Enter you Email"  name="email" value= {email} variant="standard" fullwidth required style={inputStyle} onChange={e => onInputChange(e)}/>
                <TextField label="Phone number" placeholder="Enter you Phone number" name="phoneNumber" value= {phoneNumber} variant="standard" fullwidth required style={inputStyle} onChange={e => onInputChange(e)}/>
                <TextField label="Password" placeholder="Enter you username" name="password" value= {password} type="password" variant="standard" fullwidth required style={inputStyle} onChange={e => onInputChange(e)}/>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="I accept the terms and conditions" style={inputStyle} />
                </FormGroup>
                {/* <Routes>
                    <Route> */}
                        <Button type="submit" color="primary" variant="contained" onClick={signUpOperation} fullWidth>Sign Up</Button>
                    {/* </Route>
                </Routes> */}
            </Paper>
        </Grid>
    )
}

export default SignUp