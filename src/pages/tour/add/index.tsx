import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import AddTour from '@/templates/AddTour'


const AddTourPage: NextPage = () => {
    return (
        <DashboardLayout>
            <AddTour />
        </DashboardLayout>
    )
}


export default AddTourPage