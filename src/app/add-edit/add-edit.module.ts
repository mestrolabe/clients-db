import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

// PrimeNG Modules
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {SelectButtonModule} from 'primeng/selectbutton';



@NgModule({
  declarations: [
    AddEditComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    FormsModule,
    DynamicDialogModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    MultiSelectModule,
    SelectButtonModule
  ],
  exports: [
    AddEditComponent
  ]
})
export class AddEditModule { }
