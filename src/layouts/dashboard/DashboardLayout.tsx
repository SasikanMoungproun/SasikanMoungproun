import type { DashboardLayoutProps } from './interfaces'

import Header from './header'
import Sidebar from './sidebar'
import Content from './content'

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            <Header />
            <Sidebar />
            <Content>
                <main>
                    {children}
                </main>
            </Content>
        </div>
    )
}