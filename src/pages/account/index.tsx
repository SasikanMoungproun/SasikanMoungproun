import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Account from '@/templates/Account'

const AccountPage: NextPage = () => {
    return (
        <DashboardLayout>
            <Account />
        </DashboardLayout>
    )
}

export default AccountPage