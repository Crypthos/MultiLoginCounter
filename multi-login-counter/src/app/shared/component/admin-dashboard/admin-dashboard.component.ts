import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
  }
}
