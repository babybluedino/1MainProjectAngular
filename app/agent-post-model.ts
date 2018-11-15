
import { PrimaryLanguage } from "./PrimaryLanguage.enum";
import {TelecomCircle} from "./TelecomCircle.model.ts";
export class AgentPostModel {

    csaId:number
    csaFname:string
    csaLname:string
    csaMobileNo:string
    csaEmailId:string
    csaPrimaryLang:PrimaryLanguage
    tcId:number

    constructor(){}

}
