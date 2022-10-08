import axios from "axios";

export default axios.create({

    baseURL: 'https://api.chucknorris.io/jokes/random',
    responseType: 'JSON',
    timeout :6000
})