import LoginForm from './LoginForm'
import Card from '@mui/material/Card'

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-100">
            <Card className="p-4 w-full max-w-sm">
                <LoginForm />
            </Card>
        </div>
    )
}