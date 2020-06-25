import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {AuthService} from '../accounts/auth.service';
import {error} from 'util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error: string = null;


  constructor(private  authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.login(email, password).subscribe(
      resData => {
      this.authService.isAuthenticated = true;
      this.router.navigate(['/accounts']);
    },
      error => {
        this.error = 'Ошибка Авторизации!';
      }
    );
    this.form.reset();
  }

  onEnterData() {
    const myEmail = 'adminapp@gmail.com';
    const myPassword = 123456;

    this.form = new FormGroup({
      'email': new FormControl(myEmail, [Validators.required, Validators.email]),
      'password': new FormControl(myPassword, Validators.required)
    });
  }

}
