const axios = require('axios');



const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY; 
const axiosClient = axios.create({
  baseURL:'https://doctor-appointment-backend-strapi-suju.onrender.com/api',
  headers:{
    'Authorization':`Bearer ${API_KEY}`
  }
});

const getCategories = () => axiosClient.get('/categories?populate=*');


const getDoctorList = () => axiosClient.get('/doctor-lists?populate=*');

const getDoctorByCategory = (category) => axiosClient.get('/doctor-lists?filter[categories][Name][$in]='+category+"&populate=*");

const getDoctorByID = (id) => axiosClient.get('/doctor-lists/'+id+'?populate=*');

const bookAppointment = (data) => axiosClient.post('/appointments', data);

const sendEmail = (data) => axios.post('/api/sendEmail', data)

const getUserBookingList = (userEmail) => axiosClient.get('/appointments?filters[Email][$eq]='+userEmail);

const deleteBooking = (id) => axiosClient.delete('/appointments/'+id);

export default {
  getCategories,
  getDoctorList,
  getDoctorByCategory,
  getDoctorByID,
  bookAppointment,
  sendEmail,
  getUserBookingList,
  deleteBooking
};