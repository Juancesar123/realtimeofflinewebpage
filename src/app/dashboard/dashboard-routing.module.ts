import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { AuthGuard } from './../auth/auth.guard';
const routes: Routes = [
  {
    path:'',
    component:BerandaComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
