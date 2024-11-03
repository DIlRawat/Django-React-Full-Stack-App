import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiURL = "/choreo-apis/djangoreactfullstackapp/backend/v1"

// Interceptor: intercept any request we will send and automatically add correct headers
// so that we don't have to manually add those headers
// axios to send network requests. 
// Axios interceptor which will check if we have access token every time we send the request

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default api;