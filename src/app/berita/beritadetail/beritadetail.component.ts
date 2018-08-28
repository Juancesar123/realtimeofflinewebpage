import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeritaService } from './../berita.service';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Configendpoint } from './../../config/configendpoint';
@Component({
  selector: 'app-beritadetail',
  templateUrl: './beritadetail.component.html',
  styleUrls: ['./beritadetail.component.css']
})
export class BeritadetailComponent implements OnInit {
  data$:Observable<any[]>
  apigambar:string = Configendpoint.endpointapi
  constructor(
    private route: ActivatedRoute,
    private _berita:BeritaService
  ) { 
    let id = this.route.snapshot.paramMap.get('id');
    this.data$ = _berita.messagesdetail$(id).pipe(map(m=>m))

  }

  ngOnInit() {
   
  }

}
