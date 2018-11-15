import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {Router} from '@angular/router';
import { Plandetails } from '../plandetails';
import {PlansAddComponent} from '../plans-add/plans-add.component'
import { PlanserviceService } from '../planservice.service';
import {Location} from '@angular/common';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlansComponent implements OnInit {
  currentUser: Admin;
  plans: Plandetails[];
  show_getbyplanid:boolean=false;
  search_by:String="true";
  show_search:boolean=false;
  show_plan:boolean=false;
  id:number;
  telecom_circle:number

  constructor(public authService: AuthService,private router:Router,private planService:PlanserviceService,private location:Location) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
   
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
         // alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
      //    alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }
  show(){
    console.log("hai")
    console.log(this.search_by)
    console.log(this.show_plan)
    console.log(typeof(this.search_by))
  }
  showsearch(){
    this.show_search=true;
    this.show_plan=false;
  }
  showplans()
  {
    this.show_search=false;
    this.show_plan=true;
  }

  getPlansById(id:number){
    this.show_getbyplanid=true;
    this.plans=[];
    this.router.navigateByUrl('plan-details/id/'+id); 
  }


  getPlanByTelecom(telecom_circle:number){
    this.show_getbyplanid=true;
    this.plans=[];
    this.router.navigateByUrl('plan-details/tc/'+telecom_circle); 
  }

  delete_plan(id:number)
  {
    this.planService.deletePlanById(id)
    .subscribe(
      data => {
        console.log(data);
        location.reload()
      },
      error => console.log(error));
  }

  update_plan(id,data)
  {
    console.log(id+" "+data)
  
    this.router.navigateByUrl("update-plan"+"/"+id,data)
  }

  getRevenue()
  {
    this.router.navigateByUrl("revenue")
  }

}

