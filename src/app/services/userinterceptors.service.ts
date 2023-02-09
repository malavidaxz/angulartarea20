import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//le agregamos implements httpinterceptor
export class UserinterceptorsService implements HttpInterceptor {

  constructor() { }

  //y escribimos intercept
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('este es el interceptor');
    req = req.clone({
      setHeaders:{
        'Authorization':'token de autorizacion'
      }
    });

    return next.handle(req);
  }
  //cuando se usan sesiones se le asigna un identificador al usuario y asi es mas rapida la comunicacion










}
