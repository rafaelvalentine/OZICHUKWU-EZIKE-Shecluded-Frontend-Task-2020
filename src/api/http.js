import axios from "axios";
// import store from "../store";

export default () =>
axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search',
    headers: {
        'x-api-key': `5cb17320-581b-4472-87e5-a2cd0d3d8870`
    }
});