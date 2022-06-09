import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
    ) {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: ['']
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).subscribe((login) => {
        console.log('login', login);
        if (login.token) {
          localStorage.setItem('token', login.token);
          this._authService.isLoggedIn.next(true);

          this._router.navigateByUrl('/')
        }
      });
      // this._authService.isLoggedIn.next(true);

      // console.log(this.loginForm.value);
    } else {
      console.log('Invalid Form', this.loginForm);
    }

  }

}
