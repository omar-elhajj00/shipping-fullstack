import React, { useState } from "react";
import {Paper, Tabs, Tab, Box, Typography} from '@mui/material';
import { Login, SignUp } from "../components";

const SignInOutContainer = () => {
    //setState
    const [value, setValue] = useState(0);
    //when changing the value of tab 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    //TabPanel
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    return(
        <Paper square>
            <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            >
            <Tab label="Login" />
            <Tab label="Sign Up" />
            </Tabs>
            
            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp />
            </TabPanel>
            
        </Paper>
    )

}
export default SignInOutContainer;   