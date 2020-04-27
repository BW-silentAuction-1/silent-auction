import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    //returns an instance of axios
    return axios.create({
        //return base url from backend
        baseURL: '',
        headers: {
            Authorization: token
        }
    })
}