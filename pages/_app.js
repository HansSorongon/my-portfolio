import Head from 'next/head'
import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion'
import {
    ChakraProvider,
    Button,
    useColorMode,
    Container,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
    const router = useRouter()

    return (
        <Container>
            <Head>
                <title>Home - Hans Sorongon</title>
                <meta content="Hans Sorongon" property="og:title" />
                <meta content="/embed.png" property="og:image" />
                <meta
                    content="#24202c"
                    data-react-helmet="true"
                    name="theme-color"
                />
            </Head>
            <ChakraProvider theme={theme}>
                <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
                    <motion.div
                        key={router.route}
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </ChakraProvider>
        </Container>
    )
}

export default MyApp
