import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/services/account.service';
import { Account } from '../../../../models/account.model';
import { AccountFormComponent  } from '../account-form/account-form.component'

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.accountService.getLoggedInUserAccounts().subscribe(user => {
      this.accounts = user.accounts;
    })    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountFormComponent, {
      width: '320px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deletedAccount(isDeleted: boolean) {
    if (isDeleted){
      this.ngOnInit();
    }
  }
}
