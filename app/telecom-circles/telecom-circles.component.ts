import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {Router} from '@angular/router';
import { TelecomCircle } from '../TelecomCircle.model.ts';
import { TelecomServiceService } from '../telecom-service.service';
import {Location} from '@angular/common'
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-telecom-circles',
  templateUrl: './telecom-circles.component.html',
  styleUrls: ['./telecom-circles.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TelecomCirclesComponent implements OnInit {
  currentUser: Admin;
  telecomCircles:TelecomCircle[];
  showtc:boolean=false;
  show_search:boolean=false
  showid:boolean=false
  showstate:boolean=false
  state:string
  id:number
  p: number = 1;

  constructor(public authService: AuthService,private router:Router,private telecomService:TelecomServiceService,private location:Location) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
    this.telecomCircles=[]
    this.viewtc();
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
  showsearch()
  {
    this.show_search=true
  }

  addtc()
  {
    this.router.navigateByUrl('/addTc');
  }

  viewtc()
  {
    this.showtc=true;
    this.show_search=false
    this.telecomService.getAllTelecomCircles()
     .subscribe(telecomCircles => this.telecomCircles = telecomCircles);
  }

  deleteTc(id:number)
  {
    this.telecomService.deleteTelecomCircleById(id)
    .subscribe(
      data => {
        console.log(data);
        location.reload()
      },
      error => console.log(error));
  }

  byId()
  {
    this.showid=true
    this.showstate=false
  }

  byState()
  {
    this.showstate=true
    this.showid=false
  }

  getTelecomCirclesById()
  {
    this.telecomCircles=[];
    this.telecomService.getTelecomCirclesById(this.id)
     .subscribe(tc => this.telecomCircles.push(tc));  
  }

  getTelecomCirclesByState()
  {
    this.telecomCircles=[];
    this.telecomService.getTelecomCirclesByState(this.state)
     .subscribe(tc => this.telecomCircles.push(tc));  
  }


}
