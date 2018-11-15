import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentModel } from '../agent-model';
import {AgentsAddComponent} from '../agents-add/agents-add.component'
import { AgentServiceService } from '../agent-service.service';
import {Location} from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {TelecomServiceService} from '../telecom-service.service'
import { Admin } from '../model.user';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgentViewComponent implements OnInit {
  currentUser: Admin;
  agent:AgentModel;

  id:number;
  value:any;
  telecomId:number

  constructor(public authService: AuthService,private route:ActivatedRoute,private router:Router,private telecomService:TelecomServiceService, private agentService:AgentServiceService,private location:Location) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   } 

  ngOnInit() {
    console.log("hello");
    this.getAgent(this.route.snapshot.params['id']);
    this.telecomId=this.route.snapshot.params['telecomId'];
    this.getTelecom(this.telecomId)
  }

  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
     //     alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        //  alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }



  getAgent(id)
  { console.log("hello"+id);
     this.agentService.getAgentById(id)
    .subscribe(data => {
      this.agent = data
    });
  }

  getTelecom(telecomId)
  {
    this.telecomService.getTelecomCirclesById(telecomId)
    .subscribe(data => this.agent.tc=data); 
  }

  delete_agent(id:number)
  { 
    window.alert("Are you sure?");
    this.agentService.deleteAgent(id)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("/agents")
      },
      error => console.log(error));
  }

  choose(id:number){
    let txt;
    if (confirm("Are you sure?!")) {
      this.delete_agent(id);
  } 
  }


  update_agent(id)
  {
    console.log(" "+id)
    window.alert(this.telecomId);
    this.router.navigateByUrl("update-agent"+"/"+id+"/"+this.telecomId);
  }


}
