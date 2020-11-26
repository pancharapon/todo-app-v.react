import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todoapp-b1494.firebaseio.com/',
});

export default instance;
