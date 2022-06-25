import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddBus from '@/templates/AddBus'

const AddBusPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddBus />
        </DashboardLayout>
    )
}


export default AddBusPage