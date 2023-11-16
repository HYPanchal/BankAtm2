import { Component, OnInit} from '@angular/core';
import { User } from '../User/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-varyfication',
  templateUrl: './otp-varyfication.component.html',
  styleUrls: ['./otp-varyfication.component.css']
})

export class OtpVaryficationComponent implements OnInit
{
  user : User = new User();

  amo !: number;
  pin !: number;
  inotp !: string;
  otp !: number;

  amountTag : boolean = false;
  pinTag : boolean = false;
  accVal : boolean = false;

  constructor(public service : UserService, private router : Router){}

  ngOnInit(): void {
    console.log("sending mail for ");
    console.log("acc num : " + this.service.user.acc_num);
    console.log("first name : " + this.service.user.first_name);
    console.log("last name : " + this.service.user.last_name);
    console.log("mail id : " + this.service.user.mail_id);
  }

  amountValidation()
  {
    if(this.amo >= 2000)
    {
      this.service.user.amount = this.amo;
      this.service.user.tranAmount = this.amo;
      this.service.user.action = "Credit";

      console.log("service acc_num : "+this.service.user.acc_num);
      console.log("service first_name : "+this.service.user.first_name);
      console.log("service last_name : "+this.service.user.last_name);
      console.log("service mail_id : "+this.service.user.mail_id);
      console.log("service pin : "+this.service.user.pin);
      console.log("service amount : "+this.service.user.amount);
      console.log("service tranAmount : "+this.service.user.tranAmount);
      console.log("service action : "+this.service.user.action);

      this.service.request(this.service.user, "update_amount").subscribe();
      this.router.navigate(["/"]);
    }
    else
    {
      alert("Invalide Amount..Must be 2000 or more...");
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

    console.log(this.getCount(this.pin));

    if(this.getCount(this.pin) == count)
    {
      this.amountTag = true;
      this.service.user.pin = this.pin;
      this.service.request(this.service.user, "create_pin").subscribe();
    }
    else
    {
      alert("Invalide Pin...Most be 4 digit pin...");
    }
  }
}
