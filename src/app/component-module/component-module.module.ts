import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonaddComponent } from './../buttonadd/buttonadd.component';
import { ButtonsubmitComponent } from './../buttonsubmit/buttonsubmit.component';
import { EditComponent } from './../edit/edit.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ButtonaddComponent,ButtonsubmitComponent,EditComponent],
  declarations: [ButtonaddComponent,ButtonsubmitComponent,EditComponent]
})
export class ComponentModuleModule { }
