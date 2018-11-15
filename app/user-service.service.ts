import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl="http://localhost:8082"

  constructor(private http:HttpClient) { }

  getUserByUserMobile(user_mobile:number):Observable<any>
  {
    console.log(user_mobile)
    console.log(`${this.baseUrl}/users/${user_mobile}`)
    return this.http.get(`${this.baseUrl}/users/${user_mobile}`)
  }

  getUserByUserId(id:number):Observable<any>
  {
    console.log(id)
    console.log(`${this.baseUrl}/users/${id}`)
    return this.http.get(`${this.baseUrl}/users/${id}`)
  }
  deleteUserById(id:number):Observable<any>
  {
    return this.http.delete(`${this.baseUrl}/users/${id}`, { responseType: 'text' });
  }

  getUsersCount():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/users/count`)
  }
}
