import useMediaQuery from '@mui/material/useMediaQuery'
import theme from '@/theme'

export function useIsLgScreen() {
    return useMediaQuery(theme.breakpoints.up('lg'))
}