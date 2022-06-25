import { TimerOptions } from "timers"

export interface BusInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface BusFormProps {
    onSubmit: (data: BusInput) => void
}