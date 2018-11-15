import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Plandetails } from '../plandetails';
import { PlanserviceService} from '../planservice.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-plans-add',
  templateUrl: './plans-add.component.html',
  styleUrls: ['./plans-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlansAddComponent implements OnInit {
  currentUser: Admin;
  plan: Plandetails;
  submitted:boolean=false;
  tcId:number
  constructor(public authService: AuthService,public router: Router,private agentService:PlanserviceService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.plan=new Plandetails();
  }
  newPlan(): void {
    this.submitted = false;
    this.plan = new Plandetails();
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
         // alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
         // alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }
  save() {
    this.agentService.addPlan(this.plan,this.tcId)
      .subscribe(data => console.log(JSON.stringify(data)), error => console.log(error));
    this.plan = new Plandetails();
  }
  
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  
  }
