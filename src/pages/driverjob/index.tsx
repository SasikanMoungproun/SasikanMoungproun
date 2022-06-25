import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import DriverJob from '@/templates/DriverJob'

const DriverjobPage: NextPage = () => {
    return (
        <DashboardLayout>
            <DriverJob />
        </DashboardLayout>
    )
}

export default DriverjobPage