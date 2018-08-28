import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeritaComponent } from './berita/berita.component';
import { BeritadetailComponent } from './beritadetail/beritadetail.component';
const routes: Routes = [
  {
    path:'',
    component:BeritaComponent
  },
  {
    path:'detail/:id',
    component:BeritadetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeritaRoutingModule { }
