import axios from 'axios';

export const conexionAPI = axios.create({
    baseURL: 'http://191.101.18.162:8000/api'
});