import { PrimaryLanguage } from "./PrimaryLanguage.enum";
import {Plandetails} from './plandetails'
import {user} from './user.model'
import {AgentModel} from './agent-model'

export class TelecomCircle
{
    tcId:number
    district:string
    state:string
    city:string
    primaryLang:PrimaryLanguage
    pd:Plandetails
    user:user
    csa:AgentModel

    constructor(){
        
    }
}