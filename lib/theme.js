import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
    disableTransitionOnChange: false,
    useSystemColorMode: false,
}

const styles = {
    global: (props) => ({
        body: {
            bg: mode('white', '#202023')(props),
        },
    }),
}

const theme = extendTheme({ config, styles })

export default theme
