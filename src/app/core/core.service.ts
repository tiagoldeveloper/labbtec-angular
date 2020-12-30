import { SecurityUtil } from '../security/security-util/security.util';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CoreService {

   constructor(private http: HttpClient) { }

   public consultaMenuItem() {
      return this.http.get<any>(`${environment.apiUrl}/v1/usuario/permissoes`, { headers: SecurityUtil.headersToken() });
   }
}
