import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = '';

  roles: string[] = [];

  constructor() {
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
  }

//  TODO add button function

}
