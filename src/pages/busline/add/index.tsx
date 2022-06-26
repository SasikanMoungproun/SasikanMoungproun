import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddBusLine from '@/templates/AddBusLine'

const AddBusLinePage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddBusLine />
        </DashboardLayout>
    )
}


export default AddBusLinePage