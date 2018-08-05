import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RegisterRoutingModule } from './register-routing.module';
import { FormregisterComponent } from './formregister/formregister.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [FormregisterComponent]
})
export class RegisterModule { }
