import axios from "axios";

export const baseURL = "https://transcare-back-end.onrender.com/api"

export const api = axios.create({
    baseURL,
});