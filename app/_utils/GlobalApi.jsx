const axios = require('axios');



const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY; 
const axiosClient = axios.create({
  baseURL:'http://localhost:1337/api/',
  headers:{
    'Authorization':`Bearer ${API_KEY}`
  }
});

const getCategories = () => axiosClient.get('/categories?populate=*');


const getDoctorList = () => axiosClient.get('/doctor-lists?populate=*');

export default {
  getCategories,
  getDoctorList
};