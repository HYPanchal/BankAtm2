import { Component, OnInit } from '@angular/core';
import { User } from '../User/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit
{
  user : User = new User();

  // testamout :number = 10000;
  lableFlag_8 : boolean = true;

  debitflag : boolean = false;
  creditflag : boolean = false;
  newFlag : boolean = false;
  reciverExist : boolean = false;
  amountVal : boolean = false;
  resiverAccountNumber !:number;
  debitamount !: number;
  creditamount !: number;
  transferAmount !: number;

  constructor(private service : UserService, private rou : Router){}

  ngOnInit(): void {

    // this.serv.getAmountById(this.serv.user.acc_num).subscribe(data =>{
    //   this.serv.user.amount = data;
    // });

    // this.user.acc_num = 848497;

    // this.service.request(this.user, "send_user").subscribe(data =>{
    //   this.service.user = data;
    // });

    console.log("firstname : "+this.service.user.first_name);
    console.log("lastname : "+this.service.user.last_name);
    console.log("Amount : " + this.service.user.amount);

    this.user = this.service.user;

    console.log("firstname : "+this.user.first_name);
    console.log("lastname : "+this.user.last_name);
    console.log("Amount : " + this.user.amount);
  }

  setnull()
  {
    this.service.setAllnull();
    this.user.first_name = "";
    this.user.last_name = "";
    
    this.gotoHome();
  }

  gotoHome() {
    this.rou.navigate(["/"]);
  }

  debitToggle()
  {
    this.debitflag =! this.debitflag;
  }

  newToggle()
  {
    this.newFlag =! this.newFlag;
  }

  fastDebit(num : number)
  {
    let ope : string = "Debit"

    console.log("before debit : " + this.service.getAmount());
    this.user.amount = this.user.amount - num;
    console.log("debit started.....");
    console.log("amount to be debit : " + num);
    console.log("aval_bal : " + this.user.amount);
    if(this.user.amount > 0)
    {
      this.user.tranAmount = num;
      this.user.action = ope;

      this.service.user = this.user;
      console.log("service amount : " + this.service.user.amount);
      console.log("service action : " + this.service.user.action);
      console.log("service tranAmount : " + this.service.user.tranAmount);
      // this.serv.amount(this.serv.user, num, ope).subscribe();
      // this.serv.getUserById(this.serv.getAcc_num()).subscribe(data =>{
      //   this.serv.user = data;
      // });
      this.service.request(this.service.user, "update_amount").subscribe();

      // this.user = this.service.user;
      this.service.user.acc_num = this.user.acc_num;
      console.log("current bal : "+this.user.amount);
      console.log("acc num : "+this.service.user.acc_num);
    }
    else
    {
      alert("Insufficent Balence..!");
    }
  }

  optionDebit()
  {
    let ope : string = "Debit"

    this.user.amount = this.user.amount - this.debitamount;

    if(this.user.amount > 0)
    {
      this.user.tranAmount = this.debitamount;
      this.user.action = ope;

      this.service.user = this.user;

      console.log("service amount : " + this.service.user.amount);
      console.log("service action : " + this.service.user.action);
      console.log("service tranAmount : " + this.service.user.tranAmount);
  
      // this.serv.amount(this.serv.user, this.debitamount, ope).subscribe();
      // this.serv.getUserById(this.serv.getAcc_num()).subscribe(data =>{
      //   this.serv.user = data;
      // });

      this.service.request(this.service.user, "update_amount").subscribe();

      // this.user = this.service.user;
      this.service.user.acc_num = this.user.acc_num;
      console.log("current bal : "+this.user.amount);
      console.log("acc num : "+this.service.user.acc_num);
    }
    else
    {
      alert("Insufficent Balence..!"); 
    }
  }

  creditAmount()
  {
    let ope : string = "Credit";

    this.user.amount = this.user.amount + this.creditamount;  

    this.user.tranAmount = this.creditamount;
    this.user.action = ope;

    this.service.user = this.user;

    console.log("service amount : " + this.service.user.amount);
    console.log("service action : " + this.service.user.action);
    console.log("service tranAmount : " + this.service.user.tranAmount);
    // this.serv.amount(this.serv.user, this.creditamount, ope).subscribe();
    // this.serv.getUserById(this.serv.getAcc_num()).subscribe(data =>{
    //   this.serv.user = data;
    // });

    this.service.request(this.service.user, "update_amount").subscribe();

    // this.user = this.service.user;
    this.service.user.acc_num = this.user.acc_num;
    console.log("current bal : "+this.user.amount);
    console.log("acc num : "+this.service.user.acc_num);
  }

  verifyAccount(){
    this.service.getRequest(this.resiverAccountNumber).subscribe(
      (response)=>{
        this.reciverExist =! this.reciverExist;
      },(error)=>{
        this.reciverExist = false;
        alert("The User with id : "+this.resiverAccountNumber+" Dose not exist.");
      }
    );
  }

  tranferAmountrequest(){
    this.service.accountToAccountRequest(this.user.acc_num, this.resiverAccountNumber, this.transferAmount).subscribe(
      (response)=>{
        alert("The Amount : "+this.transferAmount+" has been transfered successfully");
      },(error)=>{
        if(error.status == 400){
          alert("The amount dose not transfer.");
        }
      }
    );
  }

  depositToggle()
  {
    this.creditflag =! this.creditflag;
  }

  gotoTranHis()
  {
    this.rou.navigate(['/tranhis']);
  }
}