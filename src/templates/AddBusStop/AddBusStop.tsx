import type { BusStopInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import BusForm from './BusStopForm'

export default function AddBusStop() {

    function handleSubmit(data: BusStopInput) {
        console.log(data)
    }

    return (
        <div className="p-4">
            <header className="mb-4">
                <Typography variant="h6">
                    เพิ่มรถโดยสารสาธารณะ
                </Typography>
            </header>
            <Card className="p-4 w-full max-w-md">
                <BusForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}