import axios from "axios";

const api = axios.create({
    baseURL:"https://coinranking1.p.rapidapi.com",
    
    headers: {
      'x-rapidapi-key': 'ba3d2676e0msh92fa6488236f6cfp1e6dd0jsnd994870d025c',
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }});

export default api;