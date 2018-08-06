import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsberitaRoutingModule } from './cmsberita-routing.module';
import { ListberitaComponent } from './listberita/listberita.component';
import { DashboardModule } from './../dashboard/dashboard.module';
import { ButtonsubmitComponent } from './../buttonsubmit/buttonsubmit.component';
import { ComponentModuleModule } from './../component-module/component-module.module';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
 
CommonModule,
    CmsberitaRoutingModule,
    DashboardModule,
    ComponentModuleModule
  ],
  declarations: [ListberitaComponent, TableComponent]
})
export class CmsberitaModule { }
