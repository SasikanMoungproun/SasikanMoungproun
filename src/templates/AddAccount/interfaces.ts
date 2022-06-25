import { TimerOptions } from "timers"

export interface AccountInput {
    
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface AccountFormProps {
    onSubmit: (data: AccountInput) => void
}