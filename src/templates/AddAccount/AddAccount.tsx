import type { AccountInput } from './interfaces'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import AccountForm from './AccountForm'

export default function AddAccount() {

    function handleSubmit(data: AccountInput) {
        console.log(data)
    }

    return (
        <div className="p-4">
            <header className="mb-4">
                <Typography variant="h6">
                    เพิ่มผู้ใช้งานใหม่
                </Typography>
            </header>
            <Card className="p-4 w-full max-w-md">
                <AccountForm onSubmit={handleSubmit} />
            </Card>
        </div>
    )
}