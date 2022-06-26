import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import BusStop from '@/templates/BusStop'

const BusStopPage: NextPage = () => {
    return (
        <DashboardLayout>
            <BusStop />
        </DashboardLayout>
    )
}

export default BusStopPage