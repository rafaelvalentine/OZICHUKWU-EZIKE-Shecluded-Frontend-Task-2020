import axios from "axios";
const catApi = () => axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
    headers: {
        'x-api-key': `5cb17320-581b-4472-87e5-a2cd0d3d8870`
    }
});
const lotrApi = () => axios.create({
    baseURL: 'https://the-one-api.herokuapp.com/v1',
    headers: {
        Authorization: `Bearer XuyMN15-Bh5C34T1oiQy`
    }
});
export default () => ({
    catApi,
    lotrApi
})