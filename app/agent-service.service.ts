import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {AgentModel} from './agent-model'

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {

  private baseUrl="http://localhost:8082/csa";

  constructor(private http:HttpClient) { }

  getAgentById(userId:number):Observable<any>
  {
    console.log(userId)
    console.log(`${this.baseUrl}/${userId}`)
 
    return this.http.get(`${this.baseUrl}/${userId}`)
  }

  getAgentByTc(tc:string):Observable<any>
  {
    console.log(tc)
    console.log(`${this.baseUrl}/telecom/${tc}`)
    return this.http.get(`${this.baseUrl}/telecom/${tc}`)
  }

 /* getAllTelecomCircles():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/addTc`);
  }
*/
  addAgent(tc: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, tc);
  }

  deleteAgent(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }


  updateAgent(value: AgentModel): Observable<Object> {
    //window.alert(value.tc.tcId);

    return this.http.put(`${this.baseUrl}`, value);
  }

  getAgentsCount():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/count`)
  }


}
