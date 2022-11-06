import { AnimatePresence, motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { whiten, darken, mode } from '@chakra-ui/theme-tools'

const ThemeButton = (props) => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton
                    aria-label="Toggle Color Mode"
                    color={useColorModeValue('blue.700', 'orange')}
                    background={useColorModeValue('gray.200', '#282830')}
                    icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                    onClick={toggleColorMode}
                    rounded="full"
                    mr={['0', '0', '5']}
                    _hover={{
                        bg: useColorModeValue(
                            whiten('gray.700', 70),
                            whiten('#242426', 20)
                        ),
                    }}
                    {...props}
                />
            </motion.div>
        </AnimatePresence>
    )
}

export default ThemeButton
