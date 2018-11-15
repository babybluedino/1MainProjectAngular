import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Plandetails} from './plandetails'
@Injectable({
  providedIn: 'root'
})
export class PlanserviceService {
  private baseUrl="http://localhost:8082"

  constructor(private http:HttpClient) { }

  getPlansById(planId:number):Observable<any>
  {
   
    console.log(planId);
    console.log(`${this.baseUrl}/plan/${planId}`);
    return this.http.get(`${this.baseUrl}/plan/${planId}`);
  }
  getAllPlans():Observable<any>
  {
       
    return this.http.get(`${this.baseUrl}/plan`)
  }
  
  getPlansByTelecomCircles(tc:number):Observable<any>
  {
    console.log(tc)
    console.log(`${this.baseUrl}/plan/${tc}`)
   // window.alert(tc)
    return this.http.get(`${this.baseUrl}/plan/telecom/${tc}`)
  }

  getRevenue()
  {
    return this.http.get(`${this.baseUrl}/plan/revenue`)
  }

  downloadz()
  {
    this.http.get(`${this.baseUrl}/plan/download`);
    console.log(`${this.baseUrl}/plan/download`);
  }

  getPredictions()
  {
    return this.http.get(`${this.baseUrl}/plan/prediction`);
  }

 /* getAllTelecomCircles():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/addTc`);
  }
*/
  addPlan(tc: Object, tcId:number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/plan/createplan/${tcId}`, tc);
  }

  deletePlanById(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/plan/${id}`, { responseType: 'text' });
  }

  updatePlan(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/plan/${id}`, value);
  }
}

