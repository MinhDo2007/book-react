import axios from 'axios';
import * as Config from './../constants/config';

export default function callApi(endpoint, method='GET', body){
  return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body
  }).then(response => {
    return response;
  }).catch(error => {
    console.log(error);
  })
}
