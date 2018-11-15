import { BrowserModule } from '@angular/platform-browser';
import { NgModule,forwardRef } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TelecomCirclesComponent } from './telecom-circles/telecom-circles.component';
import { CreateTcComponent } from './create-tc/create-tc.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentsAddComponent } from './agents-add/agents-add.component';
import { UserComponent } from './user/user.component';
import { AgentsUpdateComponent } from './agents-update/agents-update.component';
import { PlansComponent } from './plans/plans.component';
import { PlansAddComponent } from './plans-add/plans-add.component';
import { UserViewComponent } from './user-view/user-view.component';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { PlanUpdateComponent } from './plan-update/plan-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentsDetailsComponent } from './agents-details/agents-details.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from "./auth.service";
import {UrlPermission} from "./url.permission";
import {AccountService} from "./account.service";
import { DatePipe } from '@angular/common';
import { RevenueComponent } from './revenue/revenue.component';
import { PredictionsComponent } from './predictions/predictions.component'
import {NgxPaginationModule} from 'ngx-pagination';
import { PaginationModule  } from 'ng2-bootstrap';



const routes = [
  { path: '', component: DashboardComponent,canActivate: [UrlPermission]},
  { path: 'user', component: UserComponent,canActivate: [UrlPermission] },
  { path: 'revenue', component: RevenueComponent,canActivate: [UrlPermission] },
  { path: 'predictions', component: PredictionsComponent,canActivate: [UrlPermission] },
  { path: 'login', component: LoginComponent },
  { path: 'user-view/:userId', component: UserViewComponent },
  { path: 'telecom-circles', component: TelecomCirclesComponent,canActivate: [UrlPermission] },
  { path: 'tickets', component: TicketsComponent ,canActivate: [UrlPermission]},
  { path: 'agents', component: AgentsComponent,canActivate: [UrlPermission] },
  { path: 'agents/agents-add', component: AgentsAddComponent,canActivate: [UrlPermission] },
  { path: 'update-agent/:id/:tcId', component: AgentsUpdateComponent,canActivate: [UrlPermission] },
  { path: 'update-plan/:id', component: PlanUpdateComponent,canActivate: [UrlPermission] },
  { path: 'agents/agent-view/:id/:telecomId', component: AgentViewComponent,canActivate: [UrlPermission] },
  { path: 'plans', component: PlansComponent,canActivate: [UrlPermission] },
  { path: 'plans-add', component: PlansAddComponent,canActivate: [UrlPermission] },
  { path: 'addTc', component: CreateTcComponent,canActivate: [UrlPermission] },
  { path: 'update-ticket/:id', component: UpdateTicketComponent ,canActivate: [UrlPermission]},
  { path: 'agents-details/id/:id', component: AgentsDetailsComponent,canActivate: [UrlPermission] },
  { path: 'user-details/:id', component: UserDetailsComponent,canActivate: [UrlPermission]},
  { path: 'plan-details/id/:id', component: PlanDetailsComponent ,canActivate: [UrlPermission]},
  { path: 'agents-details/tc/:telecom_circles', component: AgentsDetailsComponent,canActivate: [UrlPermission] },
  { path: 'plan-details/tc/:telecom_circle', component: PlanDetailsComponent,canActivate: [UrlPermission] }
];

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TelecomCirclesComponent,
    CreateTcComponent,
    UpdateTicketComponent,
    AgentsComponent,
    AgentsAddComponent,
    UserComponent,
    AgentsUpdateComponent,
    PlansComponent,
    PlansAddComponent,
    UserViewComponent,
    AgentViewComponent,
    PlanUpdateComponent,
    DashboardComponent,
    AgentsDetailsComponent,
    PlanDetailsComponent,
    UserDetailsComponent,
    LoginComponent,
    RevenueComponent,
    PredictionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NgxPaginationModule,
    PaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DatePipe, TicketsComponent,AgentViewComponent,forwardRef(() => AuthService),forwardRef(() => AccountService),UrlPermission],
  bootstrap: [AppComponent]

})
export class AppModule { }
