import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { user } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailsComponent implements OnInit {
  currentUser: Admin;
  user:user[]
 // planId:number;
  constructor(public authService: AuthService,private route:ActivatedRoute,private router:Router,private userService:UserServiceService) 
  {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {


    this.getUserByUserId(this.route.snapshot.params['id']);
   // this.getAgentByTelecom(this.route.snapshot.params['telecom_circle']);
  }

  getUserByUserId(id){
    // this.show_getbyid=true;
    console.log("hello");
     this.user=[];
     this.userService.getUserByUserId(id)
      .subscribe(users => this.user.push(users));  
   }
   logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
         // alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
       //   alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

   viewUser(id)
   {
     console.log(id + "sad");
     this.router.navigateByUrl('user-view/'+id);
   }

   deleteUser(id:number)
   {
     this.userService.deleteUserById(id)
     .subscribe(
       data => {
         console.log(data);
         this.router.navigateByUrl('user');
       },
       error => console.log(error));
   }

}
