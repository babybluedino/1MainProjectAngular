import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation  } from '@angular/core';
import { Tickets } from '../Tickets.model';
import { TelecomServiceService } from '../telecom-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {TicketStatus} from '../TicketStatus.enum'
import { TicketType } from '../TicketType.enum';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TicketsComponent implements OnInit {
  currentUser: Admin;
  userId:number;
  status:TicketStatus
  tickets:Tickets[]
  show_search:boolean=false
  showall:boolean=false
  showid:boolean=false
  showstatus:boolean=false
 
  constructor(public authService: AuthService,private telecomService:TelecomServiceService,private router:Router) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  p: number = 1;
  ngOnInit() {
   // this.tickets=[];
    this.getAllTickets();
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
  all()
  {
    this.showall=true
    this.showid=false
    this.showstatus=false
  }

  byId()
  {
    this.showid=true
    this.showall=false
    this.showstatus=false
  }

  byStatus()
  {
    this.showstatus=true
    this.showall=false
    this.showid=false
  }

  getTicketsByUserId()
  {
  //  this.tickets=[];
    this.telecomService.getTicketByUserId(this.userId)
     .subscribe(tickets => this.tickets=tickets);  
  }

  getTicketsByStatus()
  {
  //  this.tickets=[];
    this.telecomService.getTicketsByStatus(this.status)
     .subscribe(tickets => this.tickets=tickets);  
  }

  getAllTickets()
  {
    this.show_search=false
    this.telecomService.getAllTickets()
     .subscribe(tickets => this.tickets=tickets);  
  }

  showsearch()
  {
    this.show_search=true
  }

  deleteTicket(id:number)
  {
    this.telecomService.deleteTicketById(id)
    .subscribe(
      data => {
        console.log(data);
        location.reload()
      },
      error => console.log(error));

  }

  updateTicket(id,data)
  {
    console.log(id+" "+data)
   /* this.telecomService.updateTicket(id,data)
    .subscribe(data => console.log(data), error => console.log(error));*/
    this.router.navigateByUrl("update-ticket"+"/"+id,data)
  }

  checkdisable(ticket:Tickets)
  {
   // console.log((ticket.status).toString());
  // console.log((ticket.status).toString()==="Closed");
    if((ticket.status).toString()==="Closed")
    {
      return true
    }
    else
    return false
  }

}
