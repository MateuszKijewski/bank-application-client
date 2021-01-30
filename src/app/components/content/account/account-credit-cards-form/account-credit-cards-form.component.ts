import { Component, Inject, Input, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreditCard } from '../../../../models/credit-card.model';
import { AccountService } from '../../../../services/account.service';

@Component({
  selector: 'app-account-credit-cards-form',
  templateUrl: './account-credit-cards-form.component.html',
  styleUrls: ['./account-credit-cards-form.component.css']
})
export class AccountCreditCardsFormComponent implements OnInit {

  creditCards: CreditCard[]
  formType: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccountCreditCards(this.data['accountId']).subscribe(allCreditCardsDto => {
      this.creditCards = allCreditCardsDto.data;
    })
  }

  deleteCreditCard(creditCardId: number): void {
    this.accountService.deleteCreditCardFromAccount(creditCardId);
    this.ngOnInit();
  }

  onSubmit(): void {
    this.accountService.addCreditCardToAccount(this.data['accountId'], this.formType);
    this.ngOnInit();
  }
}
