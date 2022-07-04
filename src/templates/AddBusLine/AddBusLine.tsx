import type { BusLineInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import BusLineForm from './BusLineForm'

export default function AddBusLine() {

    function handleSubmit(data: BusLineInput) {
        console.log(data)
    }

    return (
        <div className="p-4">
            <header className="mb-4">
                <Typography variant="h6">
                    เพิ่มเส้นทางรถโดยสาร
                </Typography>
            </header>
            <Card className="p-4 w-full max-w-md">
                <BusLineForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}