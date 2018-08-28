import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsberitaRoutingModule } from './cmsberita-routing.module';
import { ListberitaComponent } from './listberita/listberita.component';
import { DashboardModule } from './../dashboard/dashboard.module';
import { ComponentModuleModule } from './../component-module/component-module.module';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
@NgModule({
  imports: [
 
CommonModule,
    CmsberitaRoutingModule,
    DashboardModule,
    ComponentModuleModule,
    FormsModule,
    NgxPaginationModule,
  ],
  declarations: [ListberitaComponent]
})
export class CmsberitaModule { }
