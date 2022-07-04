import { TimerOptions } from "timers"

export interface BusStopInput {
    namebusstop: string,
    idlocation: string,
    status: string,
    createdate: string,
}

export interface BusStopFormProps {
    onSubmit: (data: BusStopInput) => void
}