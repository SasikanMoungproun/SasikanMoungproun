import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddLocation from '@/templates/AddLocation'

const AddLocationPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddLocation />
        </DashboardLayout>
    )
}


export default AddLocationPage