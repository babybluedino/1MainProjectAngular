import { PrimaryLanguage } from "./PrimaryLanguage.enum";
import {TelecomCircle} from "./TelecomCircle.model.ts";
export class AgentModel {

    csaId:number
    csaFname:string
    csaLname:string
    csaMobileNo:string
    csaEmailId:string
    csaPrimaryLang:PrimaryLanguage
    tc:TelecomCircle

    setTc(tc:TelecomCircle){
        this.tc=tc;

    }
    getTc():TelecomCircle{
        return this.tc;
    }
    constructor(){}

}
