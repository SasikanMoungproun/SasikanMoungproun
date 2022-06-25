import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddDriverJob from '@/templates/AddDriverJob'

const AddDriverJobPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddDriverJob />
        </DashboardLayout>
    )
}


export default AddDriverJobPage