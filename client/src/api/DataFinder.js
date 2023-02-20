import axios from 'axios';
const REACT_APP_URL = process.env.REACT_APP_URL;

const baseURL = REACT_APP_URL;
export default axios.create(
    {
        baseURL,
    }
);
