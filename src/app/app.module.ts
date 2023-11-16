import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OtpVaryficationComponent } from './otp-varyfication/otp-varyfication.component';
import { RegistrationsComponent } from './registrations/registrations.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PinUpdateComponent } from './pin-update/pin-update.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDashboardComponent,
    OtpVaryficationComponent,
    RegistrationsComponent,
    EditUserComponent,
    PinUpdateComponent,
    TransactionHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
