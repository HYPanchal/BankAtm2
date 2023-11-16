import { Component, OnInit } from '@angular/core';
import { User } from '../User/User';
import { UserService } from '../user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.css']
})
export class RegistrationsComponent implements OnInit
{

  user : User = new User();
  user1 : User[] = []

  saveuser : boolean = false;

  otp !: number;
  tempotp !: number;

  constructor(private service : UserService, private router : Router){}

  ngOnInit(): void 
  {
    console.log("sys started");
  }

  otpGen()
  {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  accGen()
  {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }

  sendOtp()
  {
    let valname1 : boolean = /[0-9]/.test(this.user.first_name);
    let valname2 : boolean = /[0-9]/.test(this.user.last_name);
    let valmail1 : boolean = /[0-9]/.test(this.user.mail_id);
    let valmail2 : boolean = /@/.test(this.user.mail_id);

    this.user.acc_num = this.accGen();

    if(valname1 || valname2)
    {
      alert("Invalid user name...!\nMust Contain character only");
    }
    else
    {
      if(valmail1 && valmail2)
      {
        // this.otp = this.otpGen();
        // this.service.sendOtpForAccCreateion(this.otp, this.user, "Creating new account").subscribe();

        this.user.otp = this.otpGen();
        this.user.action = "Account Creation"
        this.service.request(this.user, "send_otp").subscribe();
      }
      else
      {
        alert("Invalid e-mail id...!\nMust Contain character A-Z, a-z\nSpecial character @\nNumber 0-9");
      }
    }
  }

  emailVar()
  {
    if(this.user.otp == this.tempotp)
    {
      this.saveuser = true;
    }
    else
    {
      this.saveuser = false;
      alert("Invalide OTP");
    }
  }

  saveUser()
  {
    this.service.request(this.user, "create_user").subscribe();
    this.service.user = this.user;
    this.gotoVari();
  }

  setAllnull()
  {
    this.user.acc_num = 0;
    this.user.first_name = "";
    this.user.last_name = "";
    this.user.mail_id = "";
    this.gotoHome();
  }

  gotoVari()
  {
    this.router.navigate(["/otpvar"])
  }

  gotoHome() {
    this.router.navigate(["/"])
  }
}
