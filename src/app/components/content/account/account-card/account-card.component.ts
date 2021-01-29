import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../../../../models/account.model';
import { MatDialog } from '@angular/material/dialog';
import { AccountCreditCardsFormComponent } from '../account-credit-cards-form/account-credit-cards-form.component';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css']
})
export class AccountCardComponent implements OnInit {

  @Input() account: Account;
  @Output() deleted: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialog: MatDialog,
    private accountService: AccountService,
    ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AccountCreditCardsFormComponent, {
      width: '800px',
      data: {
        accountId: this.account.id
      }
    })
  }

  deleteAccount(accountId: number): void {
    if(confirm(`Are you sure to delete account with id: ${accountId}?`)){
      this.accountService.deleteAccount(accountId);
      this.deleted.emit(true);
    }
  }
}
