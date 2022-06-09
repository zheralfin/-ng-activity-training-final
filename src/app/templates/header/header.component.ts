import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._authService.isLoggedIn.subscribe((login: any) => {
      this.isLoggedIn = login;
      console.log('this.isLoggedIn',  this.isLoggedIn);
    });

    if (this._authService.isLogged()) {
      this.isLoggedIn = true;
    }
  }

  onLogout() {
    localStorage.clear();
    this._authService.isLoggedIn.next(false);
    this._router.navigateByUrl('/');
  }

}
