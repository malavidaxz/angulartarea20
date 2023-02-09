import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
//aqui
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserinterceptorsService } from './services/userinterceptors.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrincipalModule,
    HttpClientModule //!importar arriba manualmente
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserinterceptorsService,
      multi: true //indica que podemos tener multiples interceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



/* s18   asincrona es un form que hace post a un api,  postman no es necesario podemos usar console log 

s19 reto es sencillo, consumir api /ALBUMS y mostrar resultados en una tabla (es decir, lo que hicimos hoy)USANDO EL MISMO JSON HOLDER PERO OTRO ENDPOINT

s19 asincrona individual

s20 reto es usar httpinterceptor para capturar el response.body, pasarlo a un objeto y pasarlo a una listado (o tabla quizas) que aparece al hacer clic en btn'mostrar lista'

s20 asincrona individual usar httpinterceptor y mostrar una tabla con una imagen arriba


s18 asincrona y retos 19 y 20 PRESENTAR
*/
