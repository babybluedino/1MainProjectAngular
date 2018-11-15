import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import {Router} from '@angular/router';
import { AgentModel } from '../agent-model';
import {AgentsAddComponent} from '../agents-add/agents-add.component'
import { AgentServiceService } from '../agent-service.service';
import {Location} from '@angular/common'
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgentsComponent implements OnInit {
  currentUser: Admin;
  agents:AgentModel[];
  show_getbyid:boolean=false;
  search_by:String="true";
  show_search:boolean=true;
  show_agent:boolean=false;
  csaId:number;
  telecom_circles:string

  constructor(public authService: AuthService,private router:Router,private agentService:AgentServiceService,private location:Location) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
   
  }
  logOut() {
    console.log("Inside log out");
    this.authService.logOut()
      .subscribe(
        data => {
     //     alert('before remove'+localStorage.getItem('currentUser'));
          localStorage.removeItem('currentUser');
          this.router.navigate(['/login']);
      //    alert('after remove'+localStorage.getItem('currentUser'));
        },
        error => {
          console.log("In logout error");
        });
  }
  

  show(){
    console.log("hai")
    console.log(this.search_by)
    console.log(this.show_agent)
    console.log(typeof(this.search_by))
  }

  showsearch(){
    this.show_search=true;
    this.show_agent=false;
  }
  show_add_agent()
  {
    this.show_search=false;
    this.show_agent=true;
    this.router.navigateByUrl('agents/agents-add');
  }
  show_view_agent(id)
  {
    this.show_search=false;
    this.show_agent=true;
    console.log(id + "sad");
    this.router.navigateByUrl('agents/agent-view/'+id);
  }
  getAgentById(){
   // this.show_getbyid=true;
    this.router.navigateByUrl('agents-details/id/'+this.csaId);
  /*  this.agents=[];
    this.agentService.getAgentById(this.id)
     .subscribe(tickets => this.agents.push(tickets));  */
  }


  getAgentByTelecom(){
    this.router.navigateByUrl('agents-details/tc/'+this.telecom_circles);
   /* this.show_getbyid=true;
    this.agents=[];
    this.agentService.getAgentByTc(this.id)
     .subscribe(tickets => this.agents.push(tickets)); */
  }

  delete_agent(id:number)
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
