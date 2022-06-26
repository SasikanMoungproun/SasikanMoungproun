import type { LocationInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import LocationForm from './LocationForm'

export default function AddLocation() {

    function handleSubmit(data: LocationInput) {
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
                <LocationForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}