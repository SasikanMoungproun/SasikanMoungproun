import type { ContentProps } from '@/layouts/dashboard'

import cn from 'classnames'
import { useLayout } from '@/contexts/dashboard-layout'


export default function Content({ children }: ContentProps) {

    const { state } = useLayout()

    return (
        <div
            className={cn([
                'pt-16',
                { 'pl-64': state.lgScreen && state.sidebarOpen },
                'transition-[padding]'
            ])}
        >
            {children}
        </div>
    )
}