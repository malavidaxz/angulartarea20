import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  // constructor() { }

  //empezamos creando una instancia de tipo httpclient
  constructor(private http:HttpClient){}


  //definir la url del api (el apiURL/ esta en environment.ts, es una forma de base url, ya que podemos añadirle distintos endpoints)
  // apiUser = environment.apiURL+'Post/';
  apiUser = environment.apiURL+'posts/'; //++++


  //metodos GET para obtener datos de la api Post  (todos los metodos en el servicio tienen que ser :observable)

  //la interface en models/user.ts se llama Post y es una matriz, por eso Post[]
  getPostAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUser)
  }


  getUserId(userId: string):Observable<Post>{
    const url = this.apiUser+userId;
    return this.http.get<Post>(url); // parecerá que hay errores hasta que completes el metodo
  }


//con esto le enviamos info a la api
  setPost(user: Post):Observable<Post>{
    return this.http.post<Post>(this.apiUser,user)
  }


  //metodo get interceptor, no es igual a getPostall()(en ese se obtiene json), aqui solo queremos hacer get
  getPostAllInterceptor():Observable<any>{
    return this.http.get(this.apiUser,{observe:'response'})
  }

}
