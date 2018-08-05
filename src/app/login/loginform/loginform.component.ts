import { Component, OnInit } from '@angular/core';
import { FeathersService } from './../../feathers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  messages: string[] = [];

  constructor(private feathers:FeathersService, private router:Router) { }
  email:string;
  password:string;
  ngOnInit() {
  }
  login() {
    let email = this.email;
    let password = this.password;
    if (!email || !password) {
      this.messages.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with feathers
    this.feathers.authenticate({
      strategy: 'local',
      email,
      password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.messages.unshift('Wrong credentials!');
      });
  }
}
