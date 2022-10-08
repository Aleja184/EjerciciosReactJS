import APIRequest from "../config/axios.config";

export default function getRandomJoke() {
    return APIRequest.get('/');
}