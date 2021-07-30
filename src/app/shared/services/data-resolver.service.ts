import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IClient } from '../models/client';
import { ClientCrudService } from './client-crud.service';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<IClient> {

  constructor(private crud: ClientCrudService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IClient> | Promise<IClient> | IClient {
    let id = route.params['id'];
      return this.crud.getClient(id);
  }
}
