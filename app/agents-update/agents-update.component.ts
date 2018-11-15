import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentModel } from '../agent-model';
import { AgentServiceService } from '../agent-service.service';
import {TelecomServiceService} from '../telecom-service.service';
import {AgentsComponent} from '../agents/agents.component';
import { TelecomCircle } from '../TelecomCircle.model.ts';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-agents-update',
  templateUrl: './agents-update.component.html',
  styleUrls: ['./agents-update.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgentsUpdateComponent implements OnInit {
  currentUser: Admin;
  id:number;
  agent:AgentModel;
  agentnew={}
  telecomId:number;
  tc:TelecomCircle
constructor(public authService: AuthService,private route:ActivatedRoute,private telecomService:TelecomServiceService, private agentService:AgentServiceService,private router:Router) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}
//constructor(){}

  ngOnInit() {
    this.agent=new AgentModel();
    this.getAgent(this.route.snapshot.params['id']);
   this.tc=new TelecomCircle();
    // this.getTelecom(this.route.snapshot.params['tcId']);
   this.telecomId= this.route.snapshot.params['tcId']
   //window.alert(this.telecomId+ "gg")
   this.telecomService.getTelecomCirclesById(this.telecomId)
    .subscribe(data => this.tc=data);
  // this.agent.setTc(this.tc);
  //  window.alert(this.agent.getTc() + "ff")
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
        //  alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
        //  alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }

  getTelecom(telecomId)
  {
    this.telecomService.getTelecomCirclesById(telecomId)
    .subscribe(data => this.agent.tc=data); 

    console.log("tc"+telecomId);
    console.log(this.agent.tc);
  }


  getAgent(id)
  {
    this.agentService.getAgentById(id)
    .subscribe(data => {
      this.agent = data;
    });
  }

  update_agent(agent:AgentModel ) {
//agent.tc=this.tc;
    //window.alert(agent.tc.tcId);
    //window.alert(agent.getTc()+"aa")
    console.log("inside update"+agent)
///window.alert(agent.getTc()+"ii")
    this.agentService.updateAgent(agent)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigateByUrl("/agents")
  }

}
 




