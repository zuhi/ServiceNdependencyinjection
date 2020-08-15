import { Component, Output,EventEmitter } from '@angular/core';
import {LoggingService} from '../logging.service';
import { AccountsService } from '../accounts.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'], 
  providers: [LoggingService]
})
export class NewAccountComponent{
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    console.log("Inside constructor");
    this.accountsService.statusUpdated.subscribe(
    (status: string) => alert("New Status: "+status)
    );
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    //const service = new LoggingService();
   // service.logStatusChange(accountStatus);
   console.log("Inside new account");
    //console.log('A server status changesd, new status: ' + accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
 

  }


}
