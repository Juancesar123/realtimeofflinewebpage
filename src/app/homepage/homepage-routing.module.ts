import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';
import { BeritaComponent } from './berita/berita.component';

const routes: Routes = [
  {
    path:'',
    component:BerandaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class HomepageRoutingModule { }
