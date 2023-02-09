import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  // constructor() { }

  //empezamos creando una instancia de tipo httpclient
  constructor(private http:HttpClient){}


  //definir la url del api (el apiURL/ esta en environment.ts, es una forma de base url, ya que podemos añadirle distintos endpoints)
  // apiUser = environment.apiURL+'users/';
  apiUser = environment.apiURL+'todos/'; //++++


  //metodos GET para obtener datos de la api users  (todos los metodos en el servicio tienen que ser :observable)

  //la interface en models/user.ts se llama Users y es una matriz, por eso Users[]
  getUsersAll():Observable<Users[]>{
    return this.http.get<Users[]>(this.apiUser)
  }


  getUserId(userId: string):Observable<Users>{
    const url = this.apiUser+userId;
    return this.http.get<Users>(url); // parecerá que hay errores hasta que completes el metodo
  }


//con esto le enviamos info a la api
  postUser(user: Users):Observable<Users>{
    return this.http.post<Users>(this.apiUser,user)
  }


  //metodo get interceptor, no es igual a getusersall()(en ese se obtiene json), aqui solo queremos hacer get
  getUsersAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser,{observe:'response'})
  }

}
