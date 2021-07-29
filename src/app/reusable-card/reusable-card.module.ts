import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableCardComponent } from './reusable-card.component';
import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    ReusableCardComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [
    ReusableCardComponent
  ]
})
export class ReusableCardModule { }
