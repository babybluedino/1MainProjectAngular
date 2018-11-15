import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AuthService} from "../auth.service";
import {Admin} from "../model.user";
import {Router} from "@angular/router";
import { TelecomServiceService } from '../telecom-service.service';
import { TicketStatus } from '../TicketStatus.enum';
import { Tickets } from '../Tickets.model';
import { AgentServiceService } from '../agent-service.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {


  tickets:Tickets[];
  open;
  closed;
  agents;
  users;
  currentUser: Admin;
  constructor(public authService: AuthService, public router: Router,private ticketService:TelecomServiceService,private agentService:AgentServiceService,private userService:UserServiceService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


  }
  ngOnInit() {
    this.ticketService.getOpenTicketsCount().subscribe(data=>this.open=data);
    this.ticketService.getClosedTicketsCount().subscribe(data=>this.closed=data);
    this.agentService.getAgentsCount().subscribe(data=>this.agents=data);
    this.userService.getUsersCount().subscribe(data=>this.users=data);
  }

  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
//alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        //  alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

  




}
