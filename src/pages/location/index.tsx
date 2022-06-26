import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Location from '@/templates/Location'

const LocationPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Location />
        </DashboardLayout>
    )
}

export default LocationPage