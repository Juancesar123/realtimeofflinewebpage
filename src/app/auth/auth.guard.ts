import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth
    .logIn()
    .then(() => true)
    .catch((err) => {
      if(err.status == 504){
        return true;
      }else{ 
        this.router.navigate(['/index']);
        return false;
      }
    });
  }
}
