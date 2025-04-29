import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User/User';
import { Injectable } from '@angular/core';
import { Statement } from './User/Statement';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user : User = new User();

  state : Statement [] = [];

  private baseUrl:String = "http://localhost:8081/api/v2";

  constructor(private http:HttpClient) { }

  // getTranHisList(acc_num : number):Observable<Statement[]>
  // {
  //   return this.http.get<Statement[]>(`${this.baseUrl}/${"statement"}/${acc_num}`);
  // }

  // createUser(user:User):Observable<Object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"user"}`, user);
  // }

  // getUserById(id:number):Observable<User>
  // {
  //   console.log("sending request for getting user...")
  //   return this.http.get<User>(`${this.baseUrl}/${"user"}/${id}`);
  // }

  // getAmountById(id : number):Observable<number>
  // {
  //   console.log("sending request for getting user amount...");
  //   return this.http.get<number>(`${this.baseUrl}/${"amount"}/${id}`);
  // }

  // updatePin(id:number, pin:number):Observable<object>
  // {
  //   return this.http.get(`${this.baseUrl}/${"userinsert"}/${"pin"}/${id}/${pin}`);
  // }

  // updateAmount(user : User, amo:number, ope : String):Observable<object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"userupdate"}/${amo}/${ope}`, user);
  // }

  // sendOtpForAccCreateion(otp : number, user : User, action : string):Observable<object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"otpemail"}/${otp}/${action}`, user);
  // }

  // // sendOtpForPinUpdation(otp : number, acc_num : number):Observable<object>
  // // {
  // //   return this.http.get(`${this.baseUrl}/${"updatepin"}/${acc_num}/${otp}`);
  // // }

  // updateUser(user : User):Observable<object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"updateuser"}`, user);
  // }

  // sendExcel(user : User):Observable<object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"sendExcelsheet"}`, user);
  // }

  // accCreated(id : number, f_n : string, l_n : string, m_id : string):Observable<object>
  // {
  //   return this.http.get(`${this.baseUrl}/${"createemail"}/${id}/${f_n}/${l_n}/${m_id}`);
  // }

  // amount(user : User, amount : number, operation : string):Observable<object>
  // {
  //   return this.http.post(`${this.baseUrl}/${"userupdate"}/${amount}/${operation}`, user);
  // }

  request(user : User, ope : string):Observable<User>
  {
    return this.http.post<User>(`${this.baseUrl}/${ope}`, user);//V2 request
  }

  getRequest(acc_num : number):Observable<User>
  {
    return this.http.get<User>(`${this.baseUrl}/${acc_num}`);//V2 getRequest
  }

  accountToAccountRequest(senderAccountNumber : number, reciverAccountNumber : number, transferAmount : number):Observable<HttpResponse<any>>
  {
    return this.http.get<any>(`${this.baseUrl}/${senderAccountNumber}/${reciverAccountNumber}/${transferAmount}`);
  }

  setAllnull()
  {
    this.user.acc_num = 0;
    this.user.amount = 0;
    this.user.pin = 0;
    this.user.first_name = "";
    this.user.last_name = "";
    this.user.mail_id = "";
  }

  setAcc_num(an : number)
  {
    this.user.acc_num = an;
  }

  setFirst_name(fn : string)
  {
    this.user.first_name = fn;
  }

  setLast_name(ln : string)
  {
    this.user.last_name = ln;
  }

  setMail_id(mi : string)
  {
    this.user.mail_id = mi;
  }

  setPin(p : number)
  {
    this.user.pin = p;
  }

  setAmount(a : number)
  {
    this.user.amount = a;
  }

  getAcc_num()
  {
    return this.user.acc_num;
  }

  getFirst_name()
  {
    return this.user.first_name;
  }

  getlast_name()
  {
    return this.user.last_name;
  }

  getMail_id()
  {
    return this.user.mail_id;
  }

  getPin()
  {
    return this.user.pin;
  }

  getAmount()
  {
    return this.user.amount;
  }
}
