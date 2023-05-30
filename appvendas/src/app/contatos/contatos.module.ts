import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    ContatosComponent
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule,

  ]
})
export class ContatosModule { }
