import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = '';
  signUpUrl: string = '';
  //Optie twee
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient, private route: Router) {

    this.loginUrl = "http://localhost:8888/auth/login";
    this.signUpUrl = "http://localhost:8888/auth/register";
  }


  public login(user : User): Observable<any>{
    return this.http.post<any>(this.loginUrl, user);
  }

  public signUp(user : User): Observable<any>{
    return this.http.post<any>(this.signUpUrl, user);
  }

  public logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/'])
    return "";
}

}
