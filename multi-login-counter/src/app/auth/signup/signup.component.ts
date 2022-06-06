import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  name: string = '';
  username: string = '';
  password: string = '';

  user: User = new User();

  constructor(private authService: AuthService, private route: Router) {

  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.name = ''
  }

  onSignUp() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.name = this.name;
    this.user.role = 'user';

    this.authService.signUp(this.user).subscribe(res => {
    if (res == null){
     console.log(alert("Registration failed"));
      this.ngOnInit();
    } else {
      console.log("Registration successful.");
      console.log(this.route.navigate([ '/']));
     }
    }, error => {
      alert("Registration failed.");
      console.log(this.ngOnInit());
    })


  }



}
