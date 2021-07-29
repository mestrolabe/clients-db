import { Component, Input, OnInit } from '@angular/core';
import { IClientAcc } from 'src/app/shared/models/client-account';

@Component({
  selector: 'reusable-card',
  templateUrl: './reusable-card.component.html',
  styleUrls: ['./reusable-card.component.css']
})
export class ReusableCardComponent implements OnInit {
  @Input('account') account!: IClientAcc;
  constructor() { }

  ngOnInit(): void {
  }

}
