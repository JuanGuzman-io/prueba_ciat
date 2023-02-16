import axios from 'axios';
const URL = process.env.URL;

const baseURL = URL;
export default axios.create(
    {
        baseURL,
    }
);