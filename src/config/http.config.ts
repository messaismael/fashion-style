import axios from "axios";
// import { sanitize } from "../utils/utils";
import { SERVER_BASE_URL } from "./constants";
import { AuthService } from '../services/auth/auth.sevice';

// Axios instance
var instance = axios.create();

/**
 * Axios request interceptor, can be used to set request the logged in user token.
 * @param {import('axios').AxiosRequestConfig} config
 * @author dassiorleando
 */
function requestInterceptor(config: any) {
  // We set the bearer token (if exxisting) in all outgoing request to our API.
  const token = AuthService.getToken();
  if (token) config.headers['Authorization'] = `Bearer ${token}`;

  // Any satinization on the data before performing the request
  // if (config.data) config.data = sanitize(config.data);

  return config;
}

/**
 * Handle request error
 * @param {import('axios').AxiosError} error
 */
function requestErrorInterceptor(error: any) {
  return Promise.reject(error);
}

/**
 *
 * @param {import('axios').AxiosResponse} response
 */
function responseSuccess(response: any) {
  return response;
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

instance.interceptors.response.use(responseSuccess, responseError);

export default instance;