import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PlanserviceService } from '../planservice.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Admin } from '../model.user';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PredictionsComponent implements OnInit {

  currentUser: Admin;
  predictions={};
  plans={};
  constructor(public authService: AuthService,private planService:PlanserviceService,private router:Router) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); } 

  ngOnInit() {
    this.getPredictions();
    this.planService.getAllPlans().subscribe(data => this.plans = data);
  }

  getPredictions()
  {
    this.planService.getPredictions()
    .subscribe(data => this.predictions = data);
  }

  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
        //  alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
         // alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

}
