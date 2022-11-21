import React from 'react';
import axios from 'axios';

//landing page base urls
const BASE_URL_SIGNUP= "http://127.0.0.1:8000/api/register";
const BASE_URL_LOGIN= "http://127.0.0.1:8000/api/login";

//shipments urls
const BASE_URL_CREATE_CHIPMENT = "http://127.0.0.1:8000/api/createShipment";
const BASE_URL_DELETE_CHIPMENT = "http://127.0.0.1:8000/api/deleteShipment";



//sign up a new user
export const signUpApi = async (user) => {
    const {data} = await axios.post(`${BASE_URL_SIGNUP}`,user);
    return data;
}

//user login
export const signInApi = async(user) => {
    const {data} = await axios.post(BASE_URL_LOGIN,user);
    return data;
    // .then(response => console.log(response.data))
    // .catch(error => console.log(error));
}

export const createShipmentApi = async (shipment) => {
    await axios.post(BASE_URL_CREATE_CHIPMENT, shipment)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}
//delete shipment 
export const deleteShipmentApi = async(paybill) => {
    await axios.delete(`${BASE_URL_DELETE_CHIPMENT}/${paybill}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

    

}