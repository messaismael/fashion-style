import http from '../../config/http.config';
import { AxiosResponse } from 'axios';
import { User } from '../../model/user.model';

export class RegisterService {
  
  static registration (userData:User): Promise<AxiosResponse<{data: User}>> {
    console.log("tesdf");
    return http.post('/register', userData);
  }
} 