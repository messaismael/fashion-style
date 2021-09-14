import axios from 'axios'
import { Config } from 'jest/node_modules/pretty-format';

let instance = axios.create();

/**
 * Can be used to set request token
 * @param {import('axios').AxiosRequestConfig} config
 */
function requestInterceptor (config: any){
  let cancelToken:any = config.data?.cancelToken;

  if(cancelToken){
    cancelToken.cancel();
  }

  cancelToken = axios.CancelToken;
  const source = cancelToken.source();

}
export {}