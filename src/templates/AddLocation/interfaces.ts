import { TimerOptions } from "timers"

export interface LocationInput {
    namelocation: string
    latitude: string
    longtitude: string
    time: string
    status : string
    createdate : string
}

export interface LocationFormProps {
    onSubmit: (data: LocationInput) => void
}