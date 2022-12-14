import axios from 'axios';
//landing page base urls
const BASE_URL_SIGNUP= "http://127.0.0.1:8000/api/register";
const BASE_URL_LOGIN= "http://127.0.0.1:8000/api/login";
//shipments urls
const BASE_URL_CREATE_CHIPMENT = "http://127.0.0.1:8000/api/createShipment";
const BASE_URL_DELETE_CHIPMENT = "http://127.0.0.1:8000/api/deleteShipment";
const BASE_URL_UPDATE_CHIPMENT = "http://127.0.0.1:8000/api/updateShipment";
const BASE_URL_GET_ALL_SHIPMENTS = "http://127.0.0.1:8000/api/showShipments";
//sign up a new user
export const signUpApi = async (user) => {
    let userInfo=  await axios.post(`${BASE_URL_SIGNUP}`,user)
    userInfo= await user.json();
    return userInfo;  
}
//user login
export const signInApiRequest = async(user) => {
    let results= await axios.post(
        BASE_URL_LOGIN,
        JSON.stringify(user),
        {
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
            }    
        }
    )
      .then(response=>console.warn(response))
      .catch(err=>console.log(err));
    return results;
}
//create shipment
export const createShipmentApi = async (shipment) => {
    await axios.post(BASE_URL_CREATE_CHIPMENT, shipment)
        .then(response => console.log(response.data.json()))
        .catch(error => console.log(error));
}
//delete shipment 
export const deleteShipmentApi = async(paybill) => {
    await axios.delete(`${BASE_URL_DELETE_CHIPMENT}/${paybill}`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
}
//update shipment
export const updateShipmentApi = async (shipment) => {
    await axios.put(BASE_URL_UPDATE_CHIPMENT, shipment)
        .then(response => console.log(response.data.json()))
        .catch(error => console.log(error));
}
//get all the shipment list
export const getAllShipmentsRequest = async ({data,setData}) => {
    let results = await fetch(BASE_URL_GET_ALL_SHIPMENTS);
    results = await results.json();
    setData(results);
}