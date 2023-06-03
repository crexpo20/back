import axios from 'axios';

export const conexionAPI = axios.create({
    baseURL: 'http://31.220.21.237:8000/api'
});