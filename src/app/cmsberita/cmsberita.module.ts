import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsberitaRoutingModule } from './cmsberita-routing.module';
import { ListberitaComponent } from './listberita/listberita.component';
import { ModalinputComponent } from './modalinput/modalinput.component';
import { ModalupdateComponent } from './modalupdate/modalupdate.component';
import { DashboardModule } from './../dashboard/dashboard.module';
 
@NgModule({
  imports: [
  CommonModule,
    CmsberitaRoutingModule,
    DashboardModule
  ],
  declarations: [ListberitaComponent, ModalinputComponent, ModalupdateComponent]
})
export class CmsberitaModule { }
