import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListRoutingModule } from './client-list-routing.module';
import { ClientListComponent } from './client-list.component';
import { AddEditComponent } from '../add-edit/add-edit.component';

import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    ClientListRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DialogModule,
    PaginatorModule
  ],
  exports: [
    ClientListComponent
  ],
  entryComponents: [
    AddEditComponent
  ]
})
export class ClientListModule { }
