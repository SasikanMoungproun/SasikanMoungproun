import { TimerOptions } from "timers"

export interface AccountInput {
    
    iduser: string,
    fullname: string,
    email: string,
    username: string,
    password: string,
    position: string,
    lastlogin : string,
    socialID : string,
    socialtype : string,
    createdate: string,
}

export interface AccountFormProps {
    onSubmit: (data: AccountInput) => void
}