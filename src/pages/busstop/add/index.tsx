import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddBusStop from '@/templates/AddBusStop'

const AddBusStopPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddBusStop />
        </DashboardLayout>
    )
}


export default AddBusStopPage