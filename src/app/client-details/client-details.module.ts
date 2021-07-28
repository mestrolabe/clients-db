import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';


@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule
  ],
  exports: [
    ClientDetailsComponent
  ]
})
export class ClientDetailsModule { }
