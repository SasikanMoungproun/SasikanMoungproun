import type { TourInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import TourForm from './TourForm'

export default function AddTour() {

    function handleSubmit(data: TourInput) {
        console.log(data)
    }

    return (
        <div className="p-4">
            <header className="mb-4">
                <Typography variant="h6">
                    เพิ่มตำแหน่งของสถานที่
                </Typography>
            </header>
            <Card className="p-4 w-full max-w-md">
                <TourForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}