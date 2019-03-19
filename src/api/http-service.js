import axios from 'axios';
import baseURL from '../const/base-url';

const httpService = {
  get: (url, params, cancel) => {
    return new Promise((resolve, reject) => {
      axios(`${baseURL}/${url}`, {
        method: 'GET',
        headers: getHeaders(url),
        params: params,
        cancelToken: cancel ? cancel.token : null
      }).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  },
  post: (url, params, cancel) => {
    return new Promise((resolve, reject) => {
      axios(`${baseURL}/${url}`, {
        method: 'POST',
        headers: getHeaders(url),
        data: params,
        cancelToken: cancel ? cancel.token : null
      }).then(res => {
        resolve(res);
      }, err => {
        const errorData = err.response.data;
        reject(errorData);
      });
    });
  },
  put: (url, params, cancel) => {
    return new Promise((resolve, reject) => {
      axios(`${baseURL}/${url}`, {
        method: 'PUT',
        headers: getHeaders(url),
        data: params,
        cancelToken: cancel ? cancel.token : null
      }).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  },
  delete: (url, params, cancel) => {
    return new Promise((resolve, reject) => {
      axios(`${baseURL}/${url}`, {
        method: 'DELETE',
        headers: getHeaders(url),
        data: params,
        cancelToken: cancel ? cancel.token : null
      }).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
};

function getHeaders(url) {
  let mapboxRequest = url.includes('directions');
  let headers = mapboxRequest ? {'Content-Type': 'application/json'} : {'Client-Device': 'web', 'Content-Type': 'application/json'};
  return headers;
}

export default httpService;