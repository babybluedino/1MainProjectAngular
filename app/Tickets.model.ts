import { user } from "./user.model";
import { TicketType } from "./TicketType.enum";
import{TicketStatus} from "./TicketStatus.enum"

export class Tickets
{
    ticketId:number
    user:user
    ticketType:TicketType
    content:string
    status:TicketStatus
    raisedDate:Date
    resolvedDate:string;
}