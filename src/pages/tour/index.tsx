import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Tour from '@/templates/Tour'

const TourPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Tour />
        </DashboardLayout>
    )
}

export default TourPage