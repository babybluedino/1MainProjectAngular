import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { TelecomCircle } from '../TelecomCircle.model.ts';
import { TelecomServiceService } from '../telecom-service.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-tc',
  templateUrl: './create-tc.component.html',
  styleUrls: ['./create-tc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreateTcComponent implements OnInit {
  currentUser: Admin;
  tc: TelecomCircle;
  submitted:boolean=false;

  constructor(public authService: AuthService,public router: Router,private telecomService:TelecomServiceService) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.tc = new TelecomCircle();
    console.log("hello")

  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
        //  alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
      //    alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

  newTc(): void {
    this.submitted = false;
    this.tc = new TelecomCircle();
  }

  save() {
    this.telecomService.createTelecomService(this.tc)
      .subscribe(data => console.log(JSON.stringify(data)), error => console.log(error));
    this.tc = new TelecomCircle();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log("hey");
  }

}
