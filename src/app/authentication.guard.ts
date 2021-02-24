import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthguardServiceService } from './service/authService/authguard-service.service'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) { }
  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {
      this.router.navigateByUrl("/login");
      return false;
    }
    return true;
  }
}
