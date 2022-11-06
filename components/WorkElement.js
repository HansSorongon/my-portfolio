import { motion } from 'framer-motion'
import {
    Text,
    Box,
    Flex,
    Container,
    Heading,
    Image,
    Link,
    useColorModeValue,
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

import PageLink from './PageLink'
import StandardBox from '../components/StandardBox'

const WorkElement = (props) => {
    const { children, link, techUsed, header, github, read, visit } = props
    const bgColor = useColorModeValue('blue.600', 'blue.500')

    return (
        <StandardBox header={header} p="3vh">
            <Text
                mt={4}
                style={{ textIndent: 28, textAlign: 'justify' }}
                px={4}
            >
                {children}
            </Text>
            <Text mt={4} px={4} fontWeight="semibold">
                {techUsed}
            </Text>
            {github ? (
                <Container
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    mt={3}
                    color={bgColor}
                >
                    <IoLogoGithub fontSize={16} />
                    <Link href={link} style={{ textDecoration: 'none' }}>
                        &nbsp;See on GitHub!
                        <ChevronRightIcon fontSize="16px" />
                    </Link>
                </Container>
            ) : (
                ''
            )}
            {read ? (
                <Container
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    mt={3}
                    color={bgColor}
                >
                    <PageLink href={link} decor={false}>
                        Read more
                    </PageLink>
                    <ChevronRightIcon fontSize="16px" mt={1} />
                </Container>
            ) : (
                ''
            )}
            {visit ? (
                <Container
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    mt={3}
                    color={bgColor}
                >
                    <PageLink href={link} decor={false}>
                        <ExternalLinkIcon mr={1} mb={1} />
                        Visit Site
                    </PageLink>
                    <ChevronRightIcon fontSize="16px" mt={1} />
                </Container>
            ) : (
                ''
            )}
        </StandardBox>
    )
}

export default WorkElement
