import { TimerOptions } from "timers"

export interface TourInput {
    nametour: string
    details: string
    idlocation: string
    vdopaths: string
    imgpaths: string
    soundpaths: string
    status: string
    createdate: string
}

export interface TourFormProps {
    onSubmit: (data: TourInput) => void
}