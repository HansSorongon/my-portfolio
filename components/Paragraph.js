import {
    Text,
    Heading,
    Container,
    useColorModeValue,
    Progress,
} from '@chakra-ui/react'

import SectionHeader from './SectionHeader'

const Paragraph = (props) => {
    const { header, children, borderBackground } = props

    return (
        <Container mt="3vh" mb="2.5vh" {...props}>
            <SectionHeader fontSize={24} color="#363636">
                {header}
                <Progress size="xs" isIndeterminate mt={3} />
            </SectionHeader>
            <Container p={2}>
                <Text
                    style={{ textIndent: 28, textAlign: 'justify' }}
                    mt={3}
                    fontSize="18px"
                >
                    {children}
                </Text>
            </Container>
        </Container>
    )
}

export default Paragraph
