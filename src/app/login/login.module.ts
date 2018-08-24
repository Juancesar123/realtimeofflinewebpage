import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  imports: [
  CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LoginformComponent]
})
export class LoginModule { }
