import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentServiceService } from '../agent-service.service';
import { AgentModel } from '../agent-model';
import {TelecomServiceService} from '../telecom-service.service';
import { TelecomCircle } from '../TelecomCircle.model.ts';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-agents-details',
  templateUrl: './agents-details.component.html',
  styleUrls: ['./agents-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgentsDetailsComponent implements OnInit {
  currentUser: Admin;

  agents:AgentModel[]
  telecomId:number
  tc:TelecomCircle
  constructor(public authService: AuthService,private route:ActivatedRoute,private router:Router,private telecomService:TelecomServiceService, private agentService:AgentServiceService) {this.currentUser = JSON.parse(localStorage.getItem('currentUser')); }

  ngOnInit() {

    this.getAgentById(this.route.snapshot.params['id']);
    this.telecomId=this.route.snapshot.params['telecom_circles']
    this.getTelecomById(this.telecomId)
    this.getAgentByTelecom(this.route.snapshot.params['telecom_circles']);
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
  getAgentById(id){
    // this.show_getbyid=true;
    console.log("hello");
     this.agents=[];
     this.agentService.getAgentById(id)
      .subscribe(agents => this.agents.push(agents));  
   }
 
 
   getAgentByTelecom(telecom_circle:string){
   //  this.show_getbyid=true;
  //   this.agents=[];
     this.agentService.getAgentByTc(telecom_circle)
      .subscribe(data => this.agents=(data)); 
   }

   getTelecomById(telecomId)
   {
    this.telecomService.getTelecomCirclesById(telecomId)
    .subscribe(data => this.tc=data); 
     
 }

   

   viewAgent(id,telecomId)
   {
     console.log(id + "sad");
     this.router.navigateByUrl('agents/agent-view/'+id+"/"+telecomId);
   }

   deleteAgent(id:number)
   {
     this.agentService.deleteAgent(id)
     .subscribe(
       data => {
         console.log(data);
         location.reload()
       },
       error => console.log(error));
   }



}
