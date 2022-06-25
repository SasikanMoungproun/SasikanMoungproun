import type { DashboardLayoutProviderProps, DashboardLayoutContextValue } from './interfaces'

import { useState, useCallback } from 'react'
import { useIsomorphicLayoutEffect } from '@/utils/isomorphic-layout-effect'
import { useIsLgScreen } from '@/utils/screen'

import { Context } from './DashboardLayoutContext'

export default function DashboardLayoutProvider({ children }: DashboardLayoutProviderProps) {

    const isLgScreen = useIsLgScreen()
    const [state, setState] = useState<DashboardLayoutContextValue['state']>({ sidebarOpen: false, lgScreen: false })

    const toggleSidebar = useCallback<DashboardLayoutContextValue['toggleSidebar']>(() => {
        setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }))
    }, [])

    const dispatchLgScreen = useCallback<DashboardLayoutContextValue['dispatchLgScreen']>((payload) => {
        setState(prev => ({ ...prev, lgScreen: payload }))
    }, [])

    useIsomorphicLayoutEffect(() => {
        setState(prev => ({ sidebarOpen: isLgScreen, lgScreen: isLgScreen }))
    }, [isLgScreen])

    return (
        <Context.Provider value={{ state, toggleSidebar, dispatchLgScreen }}>
            {children}
        </Context.Provider>
    )
}