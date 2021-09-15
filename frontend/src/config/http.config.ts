import axios from 'axios'
import { AuthService } from '../services/auth/auth.sevice';
import { SERVER_BASE_URL } from './constants';

let instance = axios.create();

/**
 * Can be used to set request token
 * @param {import('axios').AxiosRequestConfig} config
 */
function requestInterceptor (config: any){
  const token = AuthService.getToken();
  if(token) config.headers['Authorization']= `Bearer ${token}`;

  return config;
}

/**
 * Handle request error
 * @param {import('axios').AxiosError} error
 */
function requestErrorInterceptor (error: any) {
  return Promise.reject(error);
}

/**
 *
 * @param {import('axios').AxiosResponse} response
 */
function responseSuscess(response:any){
  return response
}

/**
 * Handle response error
 * @param {import('axios').AxiosError} error
 * @returns {Promise<{response: any}>}
 */
function responseError(error: any) {
  return Promise.reject(error);
}

instance.defaults.baseURL = SERVER_BASE_URL;

instance.defaults.responseType = 'json';

export const interceptorDefault = instance.interceptors.request.use(
  requestInterceptor,
  requestErrorInterceptor
);

instance.interceptors.response.use(
  responseSuscess,
  responseError
);

export default instance;