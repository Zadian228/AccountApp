import { Component, OnInit } from '@angular/core';
import {AuthService} from '../accounts/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private authService: AuthService) { }

  ngOnInit() {

    }

  onResetAuth() {
    this.authService.isAuthenticated = false;
  }


  }



