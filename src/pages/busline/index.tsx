import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import BusLine from '@/templates/BusLine'

const BusLinePage: NextPage = () => {
    return (
        <DashboardLayout>
            <BusLine />
        </DashboardLayout>
    )
}

export default BusLinePage