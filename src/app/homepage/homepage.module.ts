import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { BerandaComponent } from './beranda/beranda.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BeritaComponent } from './berita/berita.component';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule
  ],
  exports:[NavbarComponent,FooterComponent],
  declarations: [BerandaComponent, NavbarComponent, FooterComponent, HeaderComponent, BeritaComponent]
})
export class HomepageModule { }
