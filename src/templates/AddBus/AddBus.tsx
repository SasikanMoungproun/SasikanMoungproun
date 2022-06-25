import type { BusInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import BusForm from './BusForm'

export default function AddBus() {

    function handleSubmit(data: BusInput) {
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