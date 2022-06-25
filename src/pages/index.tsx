import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Home from '@/templates/Home'

const HomePage: NextPage = () => {
    return (
        <DashboardLayout>
            <Home />
        </DashboardLayout>
    )
}

export default HomePage