import { Component, OnInit } from '@angular/core';
import { FeathersService } from './../../feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formregister',
  templateUrl: './formregister.component.html',
  styleUrls: ['./formregister.component.css']
})
export class FormregisterComponent implements OnInit {
  messages: string[] = [];
  constructor(private feathers:FeathersService, private router:Router) { }
  email:string;
  password:string;
  ngOnInit() {
  }
  signup() {
    let email = this.email
    let password = this.password
    this.feathers.service('users')
      
      .create({email, password})
      .then(() =>{
         this.router.navigate(['/login'])
      })
      .catch(err => this.messages.push('Could not create user!'))
    ;
  }
}
