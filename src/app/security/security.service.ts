import {SecurityUtil} from './security-util/security.util';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class SecurityService {

  constructor(private http: HttpClient) {}

  public autentica(usuario): Promise<void> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.post(`${environment.apiUrl}/login`, usuario, {headers, withCredentials: false, responseType: 'text'})
      .toPromise()
      .then(response => {
        SecurityUtil.setToken(response);
        console.log(response);
      })
      .catch(response => {

        if (response.status === 403) {
          return Promise.reject('Usuário ou senha inválida!');
        }

        return Promise.reject(response);
      });
  }
}
