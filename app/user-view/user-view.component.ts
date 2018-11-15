import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { user } from '../user.model';
import { UserServiceService } from '../user-service.service';
import {UserComponent} from '../user/user.component';
import { ActivatedRoute, Router } from '@angular/router';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserViewComponent implements OnInit {
  currentUser: Admin;
  userId:number;
  user={}
  constructor(public authService: AuthService,private route:ActivatedRoute,private userService:UserServiceService,private router:Router) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }


  ngOnInit() {
    this.getUser(this.route.snapshot.params['userId']);
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
        //  alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
       //   alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

  getUser(userId)
  {
    this.userService.getUserByUserMobile(userId)
    .subscribe(data => {
      this.user = data;
    });
  }

  deleteUser(id:number)
  {
    this.userService.deleteUserById(id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/user")
      },
      error => console.log(error));

  }

}
