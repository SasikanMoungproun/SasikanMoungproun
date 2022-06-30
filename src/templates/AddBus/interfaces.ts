import { TimerOptions } from "timers"

export interface BusInput {
    model: string,
    licensePalate: string,
    brand: string,
    color: string,
    status : string,
    createdate : string,
}

export interface BusFormProps {
    onSubmit: (data: BusInput) => void
}