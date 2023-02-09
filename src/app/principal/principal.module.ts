import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaComponent } from './vista/vista.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule,
    RouterLink, //importantes para usar routerlink
    RouterLinkActive,
    FormsModule
  ],
  exports: [
    VistaComponent
  ]
})
export class PrincipalModule { }
