import React from 'react';
import axios from 'axios';

const BASE_URL_SIGNUP="http://127.0.0.1:8000";

export const signUpApi = async (name, email, phoneNumber, password) => {
    const options ={
    params: {
      'name': name,
      'email': email,
      'phoneNumber': phoneNumber,
      'password': password
    }};

    const {data} = await axios.post(`${BASE_URL_SIGNUP}`,options);
}

