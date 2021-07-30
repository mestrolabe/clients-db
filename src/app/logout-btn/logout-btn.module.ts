import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutBtnComponent } from './logout-btn.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    LogoutBtnComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    LogoutBtnComponent
  ]
})
export class LogoutBtnModule { }
