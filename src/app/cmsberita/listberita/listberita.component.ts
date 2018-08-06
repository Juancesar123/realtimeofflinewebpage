import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listberita',
  templateUrl: './listberita.component.html',
  styleUrls: ['./listberita.component.css']
})
export class ListberitaComponent implements OnInit {
  status: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  tooglemodals(){
    console.log('test')
    this.status = !this.status
  }
}
