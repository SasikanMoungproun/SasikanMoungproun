import type { ReactNode } from 'react'

export interface DashboardLayoutState {
    lgScreen: boolean
    sidebarOpen: boolean
}

export interface DashboardLayoutContextValue {
    state: DashboardLayoutState
    dispatchLgScreen: (payload: boolean) => void
    toggleSidebar: () => void
}

export interface DashboardLayoutProviderProps {
    children?: ReactNode
}