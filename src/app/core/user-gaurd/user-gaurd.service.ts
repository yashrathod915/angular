import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserGaurdService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let role = JSON.parse(localStorage.getItem("role"));
    if (role === null) {
      this.router.navigateByUrl('/login');
    }
    else
      return true;
  }

}
