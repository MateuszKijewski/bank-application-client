import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { MatDialogRef } from '@angular/material/dialog';
import { BankService } from 'src/app/services/bank.service';
import { Bank } from 'src/app/models/bank.model';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  banks: Bank[]
  formBankId: number;
  formAccountName: string;

  constructor(private accountService: AccountService,
    private bankService: BankService,
    public dialogRef: MatDialogRef<AccountFormComponent>,
    ) { }

  ngOnInit(): void {
    this.bankService.getAllBanks().subscribe(banks => {
      this.banks = banks.data;
    })
  }

  onSubmit(): void {
    this.accountService.addAccount({
      bank_id: this.formBankId,
      account_name: this.formAccountName
    })
    this.dialogRef.close();
    
  }
}
