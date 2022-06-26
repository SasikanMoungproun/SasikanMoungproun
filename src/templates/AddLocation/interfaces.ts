import { TimerOptions } from "timers"

export interface LocationInput {
    username: string
    password: string
    fullname: string
    email : string
    position : string
    date : string
}

export interface LocationFormProps {
    onSubmit: (data: LocationInput) => void
}