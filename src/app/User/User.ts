import { Statement } from "./Statement";

export class User
{
    acc_num !: number;
    first_name !: string;
    last_name !: string;
    mail_id !: string;
    pin !: number;
    amount !: number;
    
    date !: string;
    tranTime !: string;
    tranAmount !: number;
    action !: string;
    otp !: number;
    listState !: Statement[];
}