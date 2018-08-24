import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

  constructor() { }
  isOn = false;
  clicked() 
  { 
    this.isOn = !this.isOn; 
  }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  ngOnInit() {
  }
  Click(){
    alert('hello world')
  }

}
