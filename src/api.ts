import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-deploy-yt.cyclic.app',
    headers: {
        'Acess-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default api;