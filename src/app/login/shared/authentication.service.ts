/*Este servicio permite comunicarnos con el servidor para hacer login a través de una petición HTTP (Post) enviando un nombre de usuario y una contraseña.
 Se tiene que pasar por constructor el Http de Angular para ejecutar las peticiones. 
 La petición de login nos devolverá un observable de tipo Session que almacenaremos después. El logout nos devolverá un observable de tipo Boolean.
*/
import { Injectable } from'@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { LoginObject } from './login-object.model';
import { Session } from '../../core/models/session.model'

@Injectable() export class AuthenticationService {
 constructor(private http: Http) {}

 private basePath = '/api/authenticate/';
 login(loginObj: LoginObject): Observable<Session> 
 {
 return this.http.post(this.basePath + 'login', loginObj).map(this.extractData);
 }
 logout(): Observable<Boolean> 
 {
 return this.http.post(this.basePath + 'logout', {}).map(this.extractData);
 }
 private extractData(res: Response) 
 {
 let body = res.json();
 return body;
 }
}
