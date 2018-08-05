import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonaddComponent } from './buttonadd/buttonadd.component';
import { EditComponent } from './edit/edit.component';
import { ButtonsubmitComponent } from './buttonsubmit/buttonsubmit.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonaddComponent,
    EditComponent,
    ButtonsubmitComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
