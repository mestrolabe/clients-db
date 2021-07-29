import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { IClient } from '../shared/models/client';
import { IClientAcc } from '../shared/models/client-account';
import { ClientCrudService } from '../shared/services/client-crud.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  providers: [DialogService]
})
export class AddEditComponent implements OnInit {
  title = '';
  client!: IClient;
  addClient!: FormGroup;
  sameAddress = false;

  display: boolean = true; //for modal dialog box
  disabled = false; //submitting form param

  // CRUD Variables
  private sub!: Subscription;
  errorMsg!: string;

  constructor(
    private crud: ClientCrudService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  valutes = [
    {name: 'GEL', value: 'GEL'},
    {name: 'USD', value: 'USD'},
    {name: 'EUR', value: 'EUR'},
    {name: 'RUB', value: 'RUB'}
  ]

  ngOnInit(): void {
    // Form Initialization
    this.addClient = this.fb.group({
      firstName: ['',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]],
      lastName: ['',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('([a-zA-Z]+|[\\u10D0-\\u10F0]+)')]],
      gender: ['', Validators.required],
      idNumber: ['',
        [Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]*$')]],
      phoneNumber: ['',
        [Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern('5.*')]],
      physicalAddress: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required]
      }),
      mailingAddress: this.fb.group({
        country: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required]
      }),
      img: [],
      accounts: this.fb.array([
        this.addAccount()
      ])
    });

    this.addClient.valueChanges.subscribe(console.log); //printing data to console, remove later
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id')!;
        this.getClient(id);
      }
    )
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  /* ------------------------ Getters ----------------------------*/
  get Physical() {
    return (this.addClient.controls.physicalAddress as FormGroup).controls;
  }
  get Mailing() {
    return (this.addClient.controls.mailingAddress as FormGroup).controls;
  }
  get AccountsSelector() {
    return this.addClient.get('accounts') as FormArray;
  }
  get f() {
    return this.addClient.controls;
  }


  /* ------------------------ Client Functions ----------------------------*/
  // Get single client
  getClient(id: number): void {
    this.crud.getClient(id).subscribe({
      next: (client: IClient) => this.outputClient(client),
      error: err => this.errorMsg = err
    })
  }


  // Check if mailing & physical addresses are the same
  sameAdd(same: boolean) {
    this.sameAddress = same;
    if (this.sameAddress) {
      this.addClient.patchValue({
        physicalAddress: {
          country: this.Mailing.country.value,
          city: this.Mailing.city.value,
          address: this.Mailing.address.value
        }
      });
    }
  }


  // Add or Edit, title changes and patching values
  outputClient(client: IClient): void {
    if (this.addClient) {
      this.addClient.reset();
    }
    this.client = client;
    if (this.client.id === 0) {
      this.title = 'ახალი კლიენტის დამატება';
    }
    else {
      this.title = `კლიენტი: ${this.client.firstName} ${this.client.lastName} - მონაცემების ცვლილება`;
    }

    // In case of editing, patch existing values on the form
    this.addClient.patchValue({
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      gender: this.client.gender,
      idNumber: this.client.idNumber,
      phoneNumber: this.client.phoneNumber,
      physicalAddress: {
        country: this.client.physicalAddress.country,
        city: this.client.physicalAddress.city,
        address: this.client.physicalAddress.address
      },
      mailingAddress: {
        country: this.client.mailingAddress.country,
        city: this.client.mailingAddress.city,
        address: this.client.mailingAddress.address
      },
      img: this.client.img
    });
    this.addClient.setControl('accounts', this.setExistingAccounts(client.accounts));
  }

  // Save the client
  onSubmit(): void {
    if (this.addClient.valid) {
      if (this.addClient.dirty) {
        const cl = { ...this.client, ...this.addClient.value };

        if (cl.id === 0) {
          this.crud.createClient(cl).subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMsg = err
          });
        }
        else {
          this.crud.updateClient(cl)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMsg = err
            });
        }
      }
      else {
        this.errorMsg = 'შეამოწმეთ ინფუთის ველები და მათ ქვეშ განთავსებული ვალიდაციის შეცდომები.';
      }
    }
  }

  // Navigate to the client list
  onSaveComplete(): void {
    this.router.navigate(['/client-list']);
  }


  /* ------------------------ Account Functions ----------------------------*/

  // Patching existing details
  setExistingAccounts(accs: IClientAcc[] | undefined): FormArray {
    const fa = new FormArray([]);
    accs?.forEach(a => {
      fa.push(this.fb.group({
        accNumber: a.accNumber,
        accType: a.accType,
        valute: a.valute,
        accStatus: a.accStatus
      }));
    });
    return fa;
  }

  // Create new form inputs
  addAccount(): FormGroup {
    return this.fb.group({
      accNumber: [null, Validators.required],
      accType: ['', Validators.required],
      valute: [[], Validators.required],
      accStatus: ['', Validators.required]
    })
  }

  // Button for creating new form inputs
  addAccountButton(): void {
    this.AccountsSelector.push(this.addAccount());
  }

  // Button for deleting new form inputs
  deleteAccount(index: number) {
    this.AccountsSelector.removeAt(index);
    this.AccountsSelector.markAsDirty();
    this.AccountsSelector.markAsTouched();
  }


}
