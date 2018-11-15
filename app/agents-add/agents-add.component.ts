import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { AgentModel } from '../agent-model';
import { AgentPostModel } from '../agent-post-model';
import { AgentServiceService } from '../agent-service.service';
import {Admin} from "../model.user";
import {AuthService} from "../auth.service";
import {Router} from '@angular/router';
import { TelecomServiceService } from "../telecom-service.service";
import { TelecomCircle } from "../TelecomCircle.model.ts"
 
@Component({
  selector: 'app-agents-add',
  templateUrl: './agents-add.component.html',
  styleUrls: ['./agents-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AgentsAddComponent implements OnInit {
  currentUser: Admin;
  agent: AgentPostModel;
  submitted:boolean=false;
  tcId:number
  tc:any

  constructor(private teleService:TelecomServiceService,  public authService: AuthService,public router: Router,private agentService:AgentServiceService) { this.currentUser = JSON.parse(localStorage.getItem('currentUser'));}

  ngOnInit() {
    this.agent=new AgentPostModel();
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

  newAgent(): void {
    this.submitted = false;
   // this.agent = new AgentModel();
  }



save() {
  //this.agent.tc.tcId=this.tcId;
   //this.tc=new TelecomCircle();
/*  this.teleService.getTelecomCirclesById(this.tcId).subscribe(data =>{this.tc=(data);console.log(this.tc.tcId+"hiii");this.agent.tc.tcId=this.tc.tcId});
*/
  //window.alert(this.agent.getTc());
 // console.log(this.tc.tcId+"hello")
  //this.agent.tc.tcId=this.tc.tcId;
 this.agent.tcId=this.tcId;
 //window.alert(this.agent.tc.tcId+"xxx")
  this.agentService.addAgent(this.agent)
    .subscribe(data => console.log(JSON.stringify(data)), error => console.log(error));
  //this.agent = new AgentModel();
}

onSubmit() {
  this.submitted = true;
  this.save();
}

}
