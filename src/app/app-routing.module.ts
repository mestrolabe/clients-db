import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-list',
    pathMatch: 'full'
  },
  {
    path: 'client-list',
    loadChildren: () => import('./client-list/client-list.module').then(m => m.ClientListModule)
  },
  {
    path: 'client-list/:id/client',
    loadChildren: () => import('./add-edit/add-edit.module').then(m => m.AddEditModule)
  },
  {
    path: 'client-list/:id',
    loadChildren: () => import('./client-details/client-details.module').then(m => m.ClientDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
