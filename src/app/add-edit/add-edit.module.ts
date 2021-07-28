import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEditRoutingModule } from './add-edit-routing.module';
import { AddEditComponent } from './add-edit.component';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {DynamicDialogModule} from 'primeng/dynamicdialog';

// PrimeNG Modules
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AddEditComponent,
    ValidationErrorsComponent
  ],
  imports: [
    CommonModule,
    AddEditRoutingModule,
    InputTextModule,
    FormsModule,
    DynamicDialogModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule
  ],
  exports: [
    AddEditComponent
  ]
})
export class AddEditModule { }
