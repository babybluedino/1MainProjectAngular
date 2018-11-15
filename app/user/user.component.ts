import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { user } from '../user.model';
import { UserServiceService } from '../user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {
  currentUser: Admin;
  id:number;
  user : user[]

 
  constructor(public authService: AuthService,private userService:UserServiceService,private router:Router) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {
  }

viewUser(mobile){
  this.router.navigateByUrl('/user-view/'+mobile);

  
}
logOut() {
  console.log("Inside log out");
  this.authService.logOut()
    .subscribe(
      data => {
        //alert('before remove'+localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    //    alert('after remove'+localStorage.getItem('currentUser'));
      },
      error => {
        console.log("In logout error");
      });
}
 next()
 {
   console.log(this.user)
 }

  onSubmit(){

    this.user=[];
    this.router.navigateByUrl('user-details/'+this.id); 
  }


  deleteUser(id:number)
  {
    this.userService.deleteUserById(id)
    .subscribe(
      data => {
        console.log(data);
        location.reload()
      },
      error => console.log(error));

  }
}
