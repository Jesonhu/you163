import axios from 'axios';
let nuxt  = require('../nuxt.config');

export default axios.create({
  // baseURL: nuxt.dev.baseUrl
  baseURL: 'http://127.0.0.1:3000'
});
