import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelecomServiceService } from '../telecom-service.service';
import { TicketsComponent } from '../tickets/tickets.component';
import { DatePipe } from '@angular/common';
import {Tickets} from '../Tickets.model';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UpdateTicketComponent implements OnInit {
  currentUser: Admin;
  date:string;
  ticket:Tickets; 
   constructor(public authService: AuthService,public datepipe: DatePipe,private route:ActivatedRoute,private telecomService:TelecomServiceService,private ticketComponent:TicketsComponent,private router:Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  

  ngOnInit() {
    this.getTicket(this.route.snapshot.params['id']);
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
       //   alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        //  alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }
  getTicket(id)
  {
    this.telecomService.getTicketByTicketId(id)
    .subscribe(data => {
      this.ticket = data;
    });
  }

  updateTicket(id, data) {
    console.log(id+" "+data)
    this.date=data.resolvedDate;
    this.date=this.myFunction();
    data.resolvedDate=this.date;
    this.telecomService.updateTicket(id,data)
    .subscribe(data => console.log(data), error => console.log(error));
    location.reload();
    this.router.navigateByUrl("/tickets")
  }

  myFunction():string{
 let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
 return latest_date;
}


 



}
