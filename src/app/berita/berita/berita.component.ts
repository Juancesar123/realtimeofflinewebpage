import { Component, OnInit } from '@angular/core';
import { BeritaService } from './../berita.service';

@Component({
  selector: 'app-berita',
  templateUrl: './berita.component.html',
  styleUrls: ['./berita.component.css'],
  providers:[BeritaService]
})
export class BeritaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
