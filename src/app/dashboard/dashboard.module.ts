import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BerandaComponent } from './beranda/beranda.component';

@NgModule({
  imports: [
  CommonModule,
    DashboardRoutingModule
  ],
  exports:[NavbarComponent],
  declarations: [NavbarComponent, FooterComponent, BerandaComponent]
})
export class DashboardModule { }
