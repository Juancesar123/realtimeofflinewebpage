import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
const routes: Routes = [
      {
        path:'index',
        loadChildren:'./homepage/homepage.module#HomepageModule'
      },
      {
        path:'berita',
        loadChildren:'./berita/berita.module#BeritaModule'
      },
      {
        path:'cmsberita',
        loadChildren:'./cmsberita/cmsberita.module#CmsberitaModule'
      },
      {
        path:'login',
        loadChildren:'./login/login.module#LoginModule'
      },
      {
        path:'register',
        loadChildren:'./register/register.module#RegisterModule'
      },
      {
        path:'dashboard',
        loadChildren:'./dashboard/dashboard.module#DashboardModule'
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      }
   ];
@NgModule({
  imports: [
  CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
