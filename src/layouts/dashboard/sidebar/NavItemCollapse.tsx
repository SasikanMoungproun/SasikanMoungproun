import type { NavItemCollapseProps } from '@/layouts/dashboard'

import { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import Icon from '@mdi/react'
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'


export default function NavItemCollapse({ label, icon, children }: NavItemCollapseProps) {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={() => setOpen(prev => !prev)}>
                    <ListItemIcon>
                        <Icon path={icon} size={1} />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                    <Icon path={open ? mdiChevronUp : mdiChevronDown} size={1} />
                </ListItemButton>
            </ListItem>
            <Collapse in={open}>
                <List>
                    {children}
                </List>
            </Collapse>
        </>
    )
}