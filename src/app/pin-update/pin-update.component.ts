import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../User/User';

@Component({
  selector: 'app-pin-update',
  templateUrl: './pin-update.component.html',
  styleUrls: ['./pin-update.component.css']
})
export class PinUpdateComponent 
{
  user : User = new User();

  pin !: number;
  otp !: number;
  tempOtp !: number;

  first_pin !: number;
  second_pin !: number;

  first_flag : boolean = false;
  pin_flag : boolean = false;
  otp_varification : boolean = false;
  update_flag : boolean = false;

  constructor(private service: UserService, private router: Router){}

  otpGen()
  {
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
  }

  getUser()
  {
    this.service.getRequest(this.user.acc_num).subscribe(data=>{
      this.user = data;
    });

    if(this.pin == this.user.pin)
    {
      this.first_flag = true;
    }
    else
    {
      alert("Invalide User data...!");
    }
  }

  passwordVarification()
  {
    if(this.first_pin == this.second_pin)
    {
      this.pinValidation();
    }
    else
    {
      this.pin_flag = true;
      this.otp_varification = false;
    }
  }

  getCount(temp : number) : number
  {
    return temp.toString().length;
  }

  pinValidation()
  {
    console.log("inside pin validation...") 

    let count : number = 4;

    console.log("Second pin : " + this.second_pin);
    console.log("First pin : " + this.first_pin);
    console.log("count : " + this.getCount(this.second_pin));

    if(this.getCount(this.second_pin) == count)
    {
      this.user.otp = this.otpGen();
      this.user.action = "Pin Updation";

      this.service.request(this.user, "send_otp").subscribe();

      this.pin_flag = false;
      this.otp_varification = true;
    }
    else
    {
      alert("Invalide Pin...Most be 4 digit pin...");
    }
  }

  otpVarifaction()
  {
    if(this.tempOtp == this.user.otp)
    {
      this.update_flag = true;
    }
    else
    {
      alert("Invalid otp...!");
    }
  }

  updatePin()
  {
    this.user.pin = this.second_pin;
    this.service.request(this.user, "create_pin").subscribe();
    this.router.navigate(["/"]);
  }
}
