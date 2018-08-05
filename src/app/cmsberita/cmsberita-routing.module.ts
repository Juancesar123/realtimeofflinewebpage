import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListberitaComponent } from './listberita/listberita.component';
const routes: Routes = [
  {
    path:'',
    component:ListberitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class CmsberitaRoutingModule { }
