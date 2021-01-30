import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Transaction } from '../../../../models/transaction.model';
import { TransactionService } from '../../../../services/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  displayedColumns: string[] = ['title', 'transfer_type', 'amount', 'current_balance', 'from_account', 'to_account', 'to_bank'];

  transactions: Transaction[];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator 

  constructor(
    private transactionService: TransactionService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.transactionService.getAllUserTransactions().subscribe(allTransactionsDto => {
      let correctedTransactions = allTransactionsDto.data
      .map(t => Object.assign({}, t, { transfer_type: t.transfer_type == "1" ? "Incoming" : "Outgoing"}));
      this.dataSource = new MatTableDataSource(correctedTransactions);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TransactionFormComponent, {
      width: '320px',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  applyFilter(filterTarget: EventTarget | null) {
    let element = filterTarget as HTMLInputElement;
    let value = element.value;

    this.dataSource.filter = value.trim().toLowerCase();
  }

  setClasses(transferType: string) {
    return {
      'out-transfer': transferType == "Outgoing",
      'in-transfer': transferType == "Incoming"
    }
  }
}
