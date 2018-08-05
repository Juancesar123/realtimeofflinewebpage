import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormregisterComponent } from './formregister/formregister.component';
const routes: Routes = [
  {
    path:'',
    component:FormregisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class RegisterRoutingModule { }
