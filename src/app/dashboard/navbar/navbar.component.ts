import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  status: boolean = false;
  constructor(private auth : AuthenticationService) { }

  ngOnInit() {
  }
  togglebutton(){
    this.status = !this.status
  }
  logout(){
    this.auth.logOut();
  }
}
