import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  a_n !: number;
  pin !: number;
  flag: boolean = false;
  user: User = new User();

  constructor(private service: UserService, private rou: Router) { }

  ngOnInit(): void {
    // console.log("acc_numebr : " + this.user.acc_num);
  }

  con() {
    // console.log("this.a_n : " + this.a_n);

    console.log("Home_user...")
    console.log("accnum : " + this.user.acc_num);
    console.log("firstname : " + this.user.first_name);
    console.log("lastname : " + this.user.last_name);
    console.log("mailId : " + this.user.mail_id);
    console.log("pin : "+ this.user.pin);

    // this.serv.setAcc_num(this.user.acc_num);
    // this.serv.setFirst_name(this.user.first_name);
    // this.serv.setLast_name(this.user.last_name);
    // this.serv.setMail_id(this.user.mail_id);
    // this.serv.setPin(this.user.pin);
    // this.serv.setAmount(this.user.amount);

    console.log("Service_user...")
    console.log("accnum : " + this.service.user.acc_num);
    console.log("firstname : " + this.service.user.first_name);
    console.log("lastname : " + this.service.user.last_name);
    console.log("mailId : " + this.service.user.mail_id);
    console.log("pin : " + this.service.user.pin);
    console.log("amount : " + this.service.user.amount);

    if (this.service.user.pin == this.user.pin) {
      this.flag = false;
      
      console.log("Service_user...")
      console.log("accnum : " + this.service.user.acc_num);
      console.log("firstname : " + this.service.user.first_name);
      console.log("lastname : " + this.service.user.last_name);
      console.log("mailId : " + this.service.user.mail_id);
      console.log("pin : " + this.service.user.pin);
      console.log("amount : " + this.service.user.amount);
      this.gotoUserdas();
    }
    else {
      this.flag = true;
      alert("Invalid password...try again");
    }
  }

  gotoUserdas() {
    this.rou.navigate(["/user"]);
  }

  getUser() {
    // this.serv.getUserById(this.a_n).subscribe(data => 
    // {
    //   this.user = data;
    // });

    this.service.getRequest(this.user.acc_num).subscribe(data=>
      {
        this.service.user = data;
      });
    this.con();
  }
}
