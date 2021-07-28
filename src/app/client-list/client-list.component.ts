import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientCrudService } from 'src/app/shared/services/client-crud.service';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { IClient } from '../shared/models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients!: IClient[];
  client!: IClient;

  cols!: any[]; // for table headers
  display: boolean = true; // for modal dialog box
  rows = 10; // for paginators

  // CRUD Variables
  errorMsg = '';
  sub!: Subscription;

  @ViewChild('dt') dt: Table | undefined;

  constructor(
    private crud: ClientCrudService,
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver,
    private viewContRef: ViewContainerRef
  ) { }


  ngOnInit(): void {
    // Get all clients
    this.sub = this.crud.getClients().subscribe({
      next: clients => {
        this.clients = clients;
      },
      error: err => this.errorMsg = err
    });
    // Get id & single client
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getClient(id);
    }

    // column headers
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'img', header: 'ფოტოსურათი' },
      { field: 'firstName', header: 'სახელი' },
      { field: 'lastName', header: 'გვარი' },
      { field: 'gender', header: 'სქესი' },
      { field: 'idNumber', header: 'პირადი ნომერი' },
      { field: 'phoneNumber', header: 'ტელეფონი' },
    ];

  }

  /*---------------- Functions ----------------*/

  // Get single client
  getClient(id: number): void {
    this.crud.getClient(id).subscribe({
      next: client => this.client = client,
      error: err => this.errorMsg = err
    })
  }

  // Open modal box for adding client
  addNewClient() {
    import('../add-edit/add-edit.component').then(({ AddEditComponent }) => {
      this.viewContRef.clear();
      const cmp = this.resolver.resolveComponentFactory(AddEditComponent);
      const cmpref = this.viewContRef.createComponent(cmp);
    })
  }

}
