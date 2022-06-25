import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import NavItem from './NavItem'
import NavItemCollapse from './NavItemCollapse'
import { useLayout } from '@/contexts/dashboard-layout'
import navs from '@/navs'


export default function Sidebar() {

    const { state, toggleSidebar } = useLayout()

    const renderItem = (index: number, label: string, href: string, icon: string, subItem?: boolean) => {
        return (
            <NavItem
                key={index}
                label={label}
                href={href}
                icon={icon}
                subItem={subItem}
            />
        )
    }

    const renderCollapseItem = (index: number, label: string, icon: string, children: Array<{ label: string, href: string, icon: string }>) => {
        return (
            <NavItemCollapse
                key={index}
                label={label}
                icon={icon}
            >
                {children.map((item, index) => {
                    return renderItem(index, item.label, item.href, item.icon, true)
                })}
            </NavItemCollapse>
        )
    }

    return (
        <Drawer
            open={state.sidebarOpen}
            anchor="left"
            variant={state.lgScreen ? 'persistent' : 'temporary'}
            onClose={() => toggleSidebar()}
            classes={{
                paper: 'w-64 z-[1099] lg:pt-16'
            }}
        >
            <List>
                {navs.map(({ label, href, icon, children }, index) => {
                    if (children) {
                        return renderCollapseItem(index, label, icon, children)
                    }
                    else {
                        return renderItem(index, label, href, icon)
                    }
                })}
            </List>
        </Drawer>
    )
}