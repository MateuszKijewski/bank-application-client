import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction.service';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/models/account.model';

export interface UserAccount {
  id: number,
  name: string
}
export interface OtherAccount {
  id: number,
  account_number: string
}

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnInit {  

  currentUserAccountNames: UserAccount[];
  allAccounts: OtherAccount[];

  formFromAccountId: number;
  formToAccountName: string;
  formAmount: number;
  formTitle: string;
  formTransferDate: Date;

  constructor(
    private transactionService: TransactionService,
    private accountService: AccountService,
    public dialogRef: MatDialogRef<TransactionFormComponent>
  ) { }

  ngOnInit(): void {
    this.accountService.getLoggedInUserAccounts().subscribe(data => {
      this.currentUserAccountNames = data.accounts.map(a => <UserAccount>{
        id: a.id,
        name: a.account_name
      });
    })
    this.accountService.getAllAccounts().subscribe(response => {
      this.allAccounts = response.data.map(a => <OtherAccount>{
        id: a.id,
        account_number: a.account_number
      });
    })
  }


  onSubmit(): void {
    this.transactionService.addTransaction({
      from_account_id: this.formFromAccountId,
      to_account_id: this.mapAccountNumberToAccountId(this.formToAccountName),
      amount: this.formAmount,
      title: this.formTitle,
      transfer_date: this.getCorrectDate(this.formTransferDate)
    })
  }

  mapAccountNumberToAccountId(accountNumber: string): number {
    let matchingAccount = this.allAccounts.find(a => a.account_number == accountNumber);
    if (matchingAccount) {
      return matchingAccount.id;
    }
    else {
      alert("Wrong account number");
      return -1;
    }
  } 

  getCorrectDate(date: Date): string {
    console.log(date);
    let result = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`;
    console.log(result);
    return result;
  }
}
