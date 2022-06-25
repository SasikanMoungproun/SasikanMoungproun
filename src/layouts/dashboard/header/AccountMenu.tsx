import type { AccountMenuProps } from '@/layouts/dashboard'

import NextLink from 'next/link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function AccountMenu({ open, anchorEl, onClose }: AccountMenuProps) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <NextLink href="/profile" passHref>
                <MenuItem component="a">โปรไฟล์</MenuItem>
            </NextLink>
            <MenuItem className="text-rose-500">ออกจากระบบ</MenuItem>
        </Menu>
    )
}