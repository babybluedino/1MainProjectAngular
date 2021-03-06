import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,Response} from '@angular/http';
import {Admin} from "./model.user";
import 'rxjs/add/operator/map';
import {AppComponent} from "./app.component";
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(public http: Http) { }

  public logIn(user: Admin){
   

    let headers = new Headers();
    headers.append('Accept', 'application/json')
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa( user.username+ ':' + user.password);
    headers.append("Authorization", "Basic " + base64Credential);

    let options = new RequestOptions();
    options.headers=headers;

    return this.http.get(AppComponent.API_URL+"/login" ,   options)
      .map((response: Response) => {
      // login successful if there's a jwt token in the response
      let user = response.json().principal;// the returned user object is a principal object
      if (user) {
        
        // store user details  in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
      }

    });
  }

  logOut() {
    console.log("Inside log out's log out");
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"/logout",{})
      .map((response: Response) => {
          window.localStorage.clear();
       });
  }
}
