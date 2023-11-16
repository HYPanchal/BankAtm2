import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent
{
  user : User = new User();

  pin !: number; 

  mail_id !: string;
  in_otp !: number;
  otp !: number;

  first_flag : boolean = false;
  updateuser_toggle : boolean = false;

  constructor(public service : UserService, private router : Router){};

  otpGen()
  {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  getUser()
  {
    // this.serv.getUserById(this.user.acc_num).subscribe(data =>{
    //   this.user = data;
    // });

    this.service.getRequest(this.user.acc_num).subscribe(data=>{
      this.user = data
    });

    this.service.user = this.user;

    console.log("mail_id : "+this.user.mail_id);
    console.log("mail_id : "+this.service.user.mail_id);

    if(this.user.pin == this.pin)
    {
      this.first_flag = true;
    }
    else
    {
      alert("Invalid User data...!");
    }
  }

  sendOtp()
  {
    let valname1 : boolean = /[0-9]/.test(this.user.first_name);
    let valname2 : boolean = /[0-9]/.test(this.user.last_name);
    let valmail1 : boolean = /[0-9]/.test(this.user.mail_id);
    let valmail2 : boolean = /@/.test(this.user.mail_id);

    if(valname1 || valname2)
    {
      alert("Invalid user name...!\nMust Contain character only");
    }
    else
    {
      if(valmail1 && valmail2)
      {
        this.service.user.otp = this.otpGen();
        this.service.user.action = "User Updation"
        console.log("mail_id :" +this.service.user.mail_id)
        this.service.request(this.service.user, "send_otp").subscribe();
      }
      else
      {
        alert("Invalid e-mail id...!\nMust Contain character A-Z, a-z\nSpecial character @\nNumber 0-9");
      }
    }
  }

  validateOtp()
  {
    if(this.service.user.otp == this.in_otp)
    {
      this.updateuser_toggle = true;
    }
    else
    {
      this.updateuser_toggle = false;
      alert("Invalid otp...!");
    }
  }

  updateUser()
  {
    this.service.request(this.user, "update_user").subscribe();
    this.gotoDash();
  }

  gotoDash()
  {
    this.router.navigate(["/"]);
  }

  gotoPinUpdate()
  {
    this.router.navigate(["/updatepin"]);
  }

  setnull()
  {
    this.service.setAllnull();
    this.user.first_name = "";
    this.user.last_name = "";
    
    this.router.navigate(["/"]);
  }
}

