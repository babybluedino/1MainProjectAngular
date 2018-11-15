import { PrimaryLanguage } from "./PrimaryLanguage.enum";
import { gender } from "./gender.enum";
import { TelecomCircle } from "./TelecomCircle.model.ts"
import { Plandetails } from "./plandetails";
import { Tickets } from "./Tickets.model";
export class user {
    userId : number;
    userFname: string;
    userLname:string;
    userAdharId:string;
    userEmailId:String;
    userMobileNumber:number;
    gender : gender;
    userPrimaryLang : PrimaryLanguage;
    tc : TelecomCircle[];
    tickets:Tickets[]
    pd : Plandetails[];
}