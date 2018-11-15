import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Admin } from "../model.user";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  checkerror=false;
  user: Admin = new Admin();
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.logIn(this.user)
      .subscribe(data => {
        this.router.navigate(['/']);
      }, err => {  
        this.checkerror=true;     
        this.errorMessage = "Username or password is incorrect";
        window.alert(this.errorMessage);
  }
      )
}

}
