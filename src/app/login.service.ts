import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }
  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8000/authenticate", loginViewModel, { responseType: "json" })
      .pipe(map(user => {
        if (user) {
          this.currentUserName = user.UserName;
        }
        return user;
      }))
  }

  public logout() {
    this.currentUserName = null;
  }
}
