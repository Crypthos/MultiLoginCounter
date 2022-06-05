import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  role: string = '';

  user: User = new User();
  roles: string[] = [];

  constructor(private authService: AuthService, private route: Router) {
    this.roles = [
      'admin',
      'user'
    ]
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.role = this.role;

    this.authService.login(this.user).subscribe(res => {

      if (res == null) {
        alert("Username or password is wrong");
        this.ngOnInit();
      } else {
        console.log("login succesful");
        localStorage.setItem("token", res.token)

        if (this.role == 'user') {
          this.route.navigate(['/user']);
        }

        if (this.role == 'admin') {
          this.route.navigate(['/admin']);
        }
      }

    }, error => {
      alert("Login failed");
      this.ngOnInit();
    })
  }
  
}
