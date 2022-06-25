import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Bus from '@/templates/Bus'

const BusPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Bus />
        </DashboardLayout>
    )
}

export default BusPage