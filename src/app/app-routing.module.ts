import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectLoggedInToList = () => redirectLoggedInTo(['client-list']);

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToList}
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
