import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OtpVaryficationComponent } from './otp-varyfication/otp-varyfication.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PinUpdateComponent } from './pin-update/pin-update.component';

const routes: Routes = 
[
  {path:'', component:HomeComponent},
  {path:'regis', component:RegistrationsComponent},
  {path:'user', component:UserDashboardComponent},
  {path:'otpvar', component:OtpVaryficationComponent},
  {path:'edit', component:EditUserComponent},
  {path:'tranhis', component:TransactionHistoryComponent},
  {path:'updatepin', component:PinUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
