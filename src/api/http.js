import axios from "axios";
const catApi = () => axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
    headers: {
        'x-api-key': process.env.REACT_APP_catAPI_Key
    }
});
const lotrApi = () => axios.create({
    baseURL: 'https://the-one-api.herokuapp.com/v1',
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_lotrAPI_Key}`
    }
});
export default () => ({
    catApi,
    lotrApi
})