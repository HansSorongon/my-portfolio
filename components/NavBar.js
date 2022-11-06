import {
    Flex,
    Heading,
    Spacer,
    Container,
    Button,
    useColorModeValue,
    Image,
} from '@chakra-ui/react'

import PageLink from './PageLink'
import ThemeButton from './ThemeButton'

const NavBar = (props) => {
    const formBackground = useColorModeValue('blue.200', '#19181c')

    return (
        <Flex
            position="fixed"
            backdropFilter="blur(15px)"
            p={4}
            w="100%"
            justify="center"
            zIndex={2}
            top="0%"
        >
            <Container display="flex">
                {useColorModeValue(
                    <Image
                        src="/icon2.svg"
                        width="25px"
                        height="25px"
                        mt={1.5}
                        mr={1.5}
                        alt="black_icon"
                    />,
                    <Image
                        src="/icon1.svg"
                        width="25px"
                        height="25px"
                        mt={1.5}
                        mr={1.5}
                        alt="white_icon"
                    />
                )}
                <PageLink href="/">
                    <Heading mt={1} fontSize="2xl">
                        Hans Sorongon
                    </Heading>
                </PageLink>
                <PageLink href="/works" decor={false}>
                    <Button
                        ml={4}
                        mt={[0, 1, 0]}
                        bg={formBackground}
                        px="2"
                        py="1"
                        rounded={5}
                        fontWeight="semibold"
                    >
                        Works
                    </Button>
                </PageLink>
                <Spacer />
                <ThemeButton />
            </Container>
        </Flex>
    )
}

export default NavBar
