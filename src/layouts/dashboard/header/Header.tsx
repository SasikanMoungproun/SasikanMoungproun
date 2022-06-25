import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Icon from '@mdi/react'
import { mdiMenu, mdiAccountCircle, mdiMenuOpen } from '@mdi/js'
import AccountMenu from './AccountMenu'
import { useLayout } from '@/contexts/dashboard-layout'


export default function Header() {

    const [accountBtn, setAccountBtn] = useState<HTMLElement | null>(null)
    const { state, toggleSidebar } = useLayout()

    return (
        <AppBar>
            <Toolbar>
                <IconButton
                    color="inherit"
                    onClick={() => toggleSidebar()}
                >
                    <Icon path={state.sidebarOpen ? mdiMenuOpen : mdiMenu} size={1} />
                </IconButton>
                <div className="grow"></div>
                <Button
                    color="inherit"
                    startIcon={<Icon path={mdiAccountCircle} size={1} />}
                    onClick={e => setAccountBtn(e.currentTarget)}
                >
                    Administrator
                </Button>
                <AccountMenu
                    anchorEl={accountBtn}
                    open={Boolean(accountBtn)}
                    onClose={() => setAccountBtn(null)}
                />
            </Toolbar>
        </AppBar>
    )
}