import { Container, useColorModeValue } from '@chakra-ui/react'

import SectionHeader from './SectionHeader'
// This is just the box, each box has a header prop.

const StandardBox = (props) => {
    const formBackground = useColorModeValue('blue.200', '#19191c')

    const { children, header } = props

    return (
        <Container
            background={formBackground}
            rounded={30}
            p="5vh"
            mt="4vh"
            mb="4vh"
            boxShadow="md"
            {...props}
        >
            <SectionHeader
                fontSize={24}
                color="#363636"
                borderBottomWidth="3px"
                pb={2}
                borderColor="#363636"
            >
                {header}
            </SectionHeader>
            {children}
        </Container>
    )
}

export default StandardBox
