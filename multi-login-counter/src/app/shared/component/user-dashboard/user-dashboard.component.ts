import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
this.authService.logout();
  }
}
