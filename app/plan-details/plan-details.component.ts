import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Plandetails } from '../plandetails';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanserviceService } from '../planservice.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanDetailsComponent implements OnInit {
  currentUser: Admin;
  plans:Plandetails[]
  
  constructor(public authService: AuthService,private route:ActivatedRoute,private router:Router,private planService:PlanserviceService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {

    this.getPlanById(this.route.snapshot.params['id']);
    this.getPlanByTelecom(this.route.snapshot.params['telecom_circle']);
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
  getPlanById(id){
    // this.show_getbyid=true;
    console.log("hello");
     this.plans=[];
     this.planService.getPlansById(id)
      .subscribe(plans => this.plans.push(plans));  
   }
 
 
   getPlanByTelecom(telecom_circle){
   //  this.show_getbyid=true;
     //this.plans=[];
     this.planService.getPlansByTelecomCircles(telecom_circle)
      .subscribe(plans => this.plans=plans); 
   }

 /*  viewPlans(id)
   {
     console.log(id + "sad");
     this.router.navigateByUrl('agents/agent-view/'+id);
   }*/

   deletePlan(id:number)
   {
     this.planService.deletePlanById(id)
     .subscribe(
       data => {
         console.log(data);
         location.reload()
       },
       error => console.log(error));
   }

}
