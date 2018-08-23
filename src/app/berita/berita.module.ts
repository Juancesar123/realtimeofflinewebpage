import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeritaRoutingModule } from './berita-routing.module';
import { BeritaComponent } from './berita/berita.component';
import { HomepageModule } from './../homepage/homepage.module';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  imports: [
 
CommonModule,
    BeritaRoutingModule,
    HomepageModule,
    HttpClientModule
  ],
  declarations: [BeritaComponent]
})
export class BeritaModule { }
