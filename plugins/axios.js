import axios from 'axios';
import nuxt from '../nuxt.config';

export default axios.create({
  // baseURL: nuxt.dev.baseUrl
  baseURl: 'http://127.0.0.1:3000'
});
