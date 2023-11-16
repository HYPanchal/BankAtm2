import { Component, OnInit } from '@angular/core';
import { Statement } from '../User/Statement';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User/User';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit{

  state : Statement[] = [];

  user : User = new User();

  constructor(private service : UserService, private router : Router){};

  ngOnInit(): void
  {
    // this.service.getTranHisList(this.service.getAcc_num()).subscribe(data =>{
    //   this.state = data;
    // });

    console.log(this.service.user.acc_num);

    this.service.getRequest(this.service.user.acc_num).subscribe(data =>{
      this.user = data;
    });
  }

  gotoUserDash()
  {
    this.router.navigate(['/user']);
  }

  setnull()
  {
    this.service.setAllnull();
    
    this.gotoHome();
  }

  gotoHome() {
    this.router.navigate(["/"]);
  }

  sendExcel()
  {
    this.service.request(this.service.user, "send_excel").subscribe();
  }

}
