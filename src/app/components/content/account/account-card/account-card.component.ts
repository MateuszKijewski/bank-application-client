import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../../../../models/account.model';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;

  constructor() { }

  ngOnInit(): void {
  }

}
