import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export function getWords() {
  return axios.get(`${apiPrefix}/words`);
  //return fetch('http://beta.json-generator.com/api/json/get/Vy8CzfpKZ');
}

export function addWord(data) {
  console.log(data);
  return axios.post(`${apiPrefix}/words`, data);
}
