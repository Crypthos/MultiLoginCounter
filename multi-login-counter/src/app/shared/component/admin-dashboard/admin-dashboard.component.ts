import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router ) { }

  ngOnInit(): void {
  }

    public logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/'])
    return "";
  }
}
