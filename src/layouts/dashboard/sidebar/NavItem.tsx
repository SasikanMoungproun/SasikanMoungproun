import type { NavItemProps } from '@/layouts/dashboard'

import NextLink from 'next/link'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Icon from '@mdi/react'
import cn from 'classnames'


export default function NavItem({ label, href, icon, subItem }: NavItemProps) {
    return (
        <ListItem disablePadding>
            <NextLink href={href} passHref>
                <ListItemButton component="a" className={cn([{ 'pl-8': subItem }])}>
                    <ListItemIcon>
                        <Icon path={icon} size={1} />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItemButton>
            </NextLink>
        </ListItem>
    )
}