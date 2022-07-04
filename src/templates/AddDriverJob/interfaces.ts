import { TimerOptions } from "timers"

export interface DriverJobInput {
    idbus: string
    iduser: string
    startdate: string
    enddate: string
    status: string
    createdate: string
}

export interface DriverJobFormProps {
    onSubmit: (data: DriverJobInput) => void
}