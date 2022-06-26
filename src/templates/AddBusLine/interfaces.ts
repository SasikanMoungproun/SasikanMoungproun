import { TimerOptions } from "timers"

export interface BusLineInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface BusLineFormProps {
    onSubmit: (data: BusLineInput) => void
}