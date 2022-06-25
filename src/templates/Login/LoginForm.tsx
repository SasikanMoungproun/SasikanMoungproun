import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function LoginForm() {
    return (
        <form>
            <div className="grid gap-4">
                <TextField label="Username" />
                <TextField label="Password" />
                <Button variant="contained" fullWidth>
                    Login
                </Button>
            </div>
        </form>
    )
}