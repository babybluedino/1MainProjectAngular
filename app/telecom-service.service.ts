import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TicketStatus } from "./TicketStatus.enum";
import { TelecomCircle } from './TelecomCircle.model.ts';

@Injectable({
  providedIn: 'root'
})
export class TelecomServiceService {

  private baseUrl="http://localhost:8082"

  constructor(private http:HttpClient) { }

  getTicketByUserId(userId:number):Observable<any>
  {
    console.log(userId)
    console.log(`${this.baseUrl}/tickets/${userId}`)
    return this.http.get(`${this.baseUrl}/tickets/user/${userId}`)
  }

  getTicketsByStatus(status:TicketStatus):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tickets/status/${status}`)
  }

  getTicketByTicketId(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tickets/${id}`)
  }

  getAllTickets():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tickets`)
  }

  getAllTelecomCircles():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/telecom`);
  }

  createTelecomService(tc: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/telecom`, tc);
  }

  deleteTelecomCircleById(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/telecom/${id}`, { responseType: 'text' });
  }

  getTelecomCirclesById(id:number):Observable<any>
  {

    return this.http.get(`${this.baseUrl}/telecom/${id}`)
  }

  getTelecomCirclesByState(state:string):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/telecom/state/${state}`)
  }

  deleteTicketById(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/tickets/${id}`, { responseType: 'text' });
  }

  updateTicket(id: number, value: any): Observable<Object> {
   

    return this.http.put(`${this.baseUrl}/tickets`, value);
  }

  getOpenTicketsCount():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tickets/count/open`);
  }

  getClosedTicketsCount():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/tickets/count/closed`);
  }
}
