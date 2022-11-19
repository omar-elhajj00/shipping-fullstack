import React from 'react';
import axios from 'axios';

const BASE_URL_SIGNUP="http://127.0.0.1:8000";

export const signUpApi = async (user) => {
    const options ={
    url:BASE_URL_SIGNUP,
    params: {
      'name': user.name,
      'email': user.email,
      'phoneNumber': user.phoneNumber,
      'password': user.password
    }};

    const {data} = await axios.post(`${BASE_URL_SIGNUP}`,options);
    return data;
}

