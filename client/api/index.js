import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

const path = process.env.PORT || apiPrefix;

export function getWords() {
  return axios.get(`${path}/words`);
  //return fetch('http://beta.json-generator.com/api/json/get/Vy8CzfpKZ');
}

export function addWord(data) {
  console.log(data);
  return axios.post(`${path}/words`, data);
}
