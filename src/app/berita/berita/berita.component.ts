import { Component, OnInit } from '@angular/core';
import { BeritaService } from './../berita.service';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Configendpoint } from './../../config/configendpoint';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css'],
  providers:[BeritaService]
})
export class BeritaComponent implements OnInit {
  data$:Observable<any[]>
  apigambar:string = Configendpoint.endpointapi
  constructor(private _berita:BeritaService) { 
    this.data$ = _berita.messages$().pipe(map(m=>m))
  }

  ngOnInit() {
  }

}
