import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeritaRoutingModule } from './berita-routing.module';
import { BeritaComponent } from './berita/berita.component';
import { HomepageModule } from './../homepage/homepage.module';
  
@NgModule({
  imports: [
  CommonModule,
    BeritaRoutingModule,
    HomepageModule
  ],
  declarations: [BeritaComponent]
})
export class BeritaModule { }
