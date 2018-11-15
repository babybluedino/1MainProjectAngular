import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { PlanserviceService } from '../planservice.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Admin } from '../model.user';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RevenueComponent implements OnInit {

  currentUser:Admin
  revenue={};
  plans={};
  constructor(private planService:PlanserviceService,private authService:AuthService,private router:Router) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
    this.getRevenue();
    this.planService.getAllPlans().subscribe(data => this.plans = data);
  }

  getRevenue()
  {
    this.planService.getRevenue()
    .subscribe(data => this.revenue = data);
  }

  downloadz()
  {
    this.planService.downloadz();
    
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
