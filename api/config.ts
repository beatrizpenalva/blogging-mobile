import axios from "axios"

export const api = axios.create({
    baseURL: "https://blogging-api-latest.onrender.com"
})