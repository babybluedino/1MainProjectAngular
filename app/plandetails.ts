import { TelecomCircle } from "./TelecomCircle.model.ts"
import { plantype } from "./plantype.enum";
import { user } from "./user.model";
export class Plandetails {
 planId:number;
 planName:string;
 planPrice:number;
 planType: plantype;
 planValidity: string;
 tc: TelecomCircle;
 user: user;

 constructor(){
     
 }

}
