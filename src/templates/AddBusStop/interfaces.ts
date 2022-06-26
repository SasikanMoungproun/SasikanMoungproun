import { TimerOptions } from "timers"

export interface BusStopInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface BusStopFormProps {
    onSubmit: (data: BusStopInput) => void
}