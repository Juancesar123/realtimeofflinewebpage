import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListberitaComponent } from './listberita/listberita.component';
import { AuthGuard } from './../auth/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:ListberitaComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CmsberitaRoutingModule { }
