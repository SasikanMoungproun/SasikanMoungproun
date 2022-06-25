import type { AppProps as NextAppProp } from 'next/app'

import '@/assets/css/tailwind.css'

import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '@/libs/createEmotionCache'
import theme from '@/theme'
import DashboardLayoutProvider from '@/contexts/dashboard-layout'
import NextNProgress from 'nextjs-progressbar'

interface AppProps extends NextAppProp {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache()

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps) {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <DashboardLayoutProvider>
                    <NextNProgress color="#fff" />
                    <Component {...pageProps} />
                </DashboardLayoutProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}