import type { NextPage } from 'next'

import DashboardLayout from '@/layouts/dashboard'
import Profile from '@/templates/Profile'

export const ProfilePage: NextPage = () => {
    return (
        <DashboardLayout>
            <Profile />
        </DashboardLayout>
    )
}

export default ProfilePage