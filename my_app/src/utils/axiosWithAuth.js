import axios from "axios";

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    //returns an instance of axios
    return axios.create({
        //return base url from backend
        baseURL: 'https://silent-auction-app.herokuapp.com/',

        headers: {
            // "Content-Type": "application/json",
            Authorization: token
        }
    })
}