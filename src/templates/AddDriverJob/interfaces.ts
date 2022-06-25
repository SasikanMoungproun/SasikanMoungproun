import { TimerOptions } from "timers"

export interface DriverJobInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface DriverJobFormProps {
    onSubmit: (data: DriverJobInput) => void
}