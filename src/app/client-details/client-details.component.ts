import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IClient } from '../shared/models/client';
import { ClientCrudService } from '../shared/services/client-crud.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  display: boolean = true; //for modal dialog box
  client!: IClient;

  errorMsg = '';
  sub!: Subscription;

  
  constructor(
    private crud: ClientCrudService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getClient(id);
    }
    */
   this.route.data.subscribe((data: any)=> {
     this.client = data.client;
   })
  }

    /* ------------------------ Functions ----------------------------*/

    // Get client by id
    getClient(id: number): void {
      this.crud.getClient(id).subscribe({
        next: client => this.client = client,
        error: err => this.errorMsg = err
      })
    }

    // Delete client by id
    deleteClient(): void {
      if (this.client.id === 0) {
        this.onSaveComplete();
      }
      else {
        if (confirm(`ნამდვილად გსურთ ${this.client.firstName} ${this.client.lastName}ს მონაცემების წაშლა?`)) {
          this.crud.deleteClient(this.client.id).subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMsg = err
          })
        }
      }
    }

    // Navigate back to list
    onSaveComplete(): void {
      this.router.navigate(['/client-list']);
    }
}
