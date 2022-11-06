import { Heading, useColorModeValue, Container } from '@chakra-ui/react'

const SectionHeader = (props) => {
    const { children } = props

    return (
        <Container>
            <Heading as="h3" fontSize="xl" {...props}>
                {children}
            </Heading>
        </Container>
    )
}

export default SectionHeader
