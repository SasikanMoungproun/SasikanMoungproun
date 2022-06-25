import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddAccount from '@/templates/AddAccount'

const AddAccountPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddAccount />
        </DashboardLayout>
    )
}


export default AddAccountPage