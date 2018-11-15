import { Injectable } from '@angular/core';
import {Admin} from "./model.user";
import {Http} from "@angular/http";
import {AppComponent} from "./app.component";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  constructor(public http: Http) { }

  createAccount(user:Admin){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }
}
