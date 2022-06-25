import type { DriverJobInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import DriverJobForm from './DriverJobForm'

export default function AddDriverJob() {

    function handleSubmit(data: DriverJobInput) {
        console.log(data)
    }

    return (
        <div className="p-4">
            <header className="mb-4">
                <Typography variant="h6">
                    เพิ่มการทำงาน
                </Typography>
            </header>
            <Card className="p-4 w-full max-w-md">
                <DriverJobForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}