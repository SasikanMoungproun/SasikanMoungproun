import type { DashboardLayoutContextValue } from './interfaces'
import { createContext, useContext } from 'react'

const Context = createContext<DashboardLayoutContextValue | null>(null)

const useLayout = () => {

    const ctx = useContext(Context)
    if(!ctx) throw new Error()
    return ctx
    
}

export {
    Context,
    useLayout
}