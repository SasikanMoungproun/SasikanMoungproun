import { TimerOptions } from "timers"

export interface TourInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface TourFormProps {
    onSubmit: (data: TourInput) => void
}