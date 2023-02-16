import axios from 'axios';

const baseURL = 'http://localhost:3400';
export default axios.create(
    {
        baseURL,
    }
);