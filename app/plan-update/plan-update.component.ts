import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanserviceService } from '../planservice.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-plan-update',
  templateUrl: './plan-update.component.html',
  styleUrls: ['./plan-update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanUpdateComponent implements OnInit {
  currentUser: Admin;
  plan={}
  constructor(public authService: AuthService,private route:ActivatedRoute,private planService:PlanserviceService,private router:Router) { this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.getPlan(this.route.snapshot.params['id']);
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
         // alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        //  alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }
  getPlan(id)
  {
    this.planService.getPlansById(id)
    .subscribe(data => {
      this.plan = data;
    });
  }

  update_plan(id, data) {
    console.log(id+"inside update"+data)
    this.planService.updatePlan(id,data)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigateByUrl("/agents")
  }

}
