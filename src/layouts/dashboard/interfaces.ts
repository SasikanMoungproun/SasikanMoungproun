import type { ReactNode } from 'react'

export interface NavItem {
    label: string
    href: string
    icon: string
}

export type Navs = Array<NavItem & { children?: Array<NavItem> }>

export interface DashboardLayoutProps {
    children?: ReactNode
}

export interface AccountMenuProps {
    anchorEl: HTMLElement | null
    open: boolean
    onClose?: () => void
}

export interface NavItemProps {
    label: string
    href: string
    icon: string
    subItem?: boolean
}

export interface NavItemCollapseProps {
    label: string
    icon: string
    children?: ReactNode
}

export interface ContentProps {
    children?: ReactNode
}