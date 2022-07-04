import { TimerOptions } from "timers"

export interface BusLineInput {
    topic: string
    details: string
    status: string
    createdate: string
}

export interface BusLineFormProps {
    onSubmit: (data: BusLineInput) => void
}