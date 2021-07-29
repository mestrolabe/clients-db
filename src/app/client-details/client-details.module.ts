import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDetailsRoutingModule } from './client-details-routing.module';
import { ClientDetailsComponent } from './client-details.component';
import { ReusableCardModule } from '../reusable-card/reusable-card.module';


import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ClientDetailsComponent
  ],
  imports: [
    CommonModule,
    ClientDetailsRoutingModule,
    ButtonModule,
    ReusableCardModule
  ],
  exports: [
    ClientDetailsComponent
  ]
})
export class ClientDetailsModule { }
