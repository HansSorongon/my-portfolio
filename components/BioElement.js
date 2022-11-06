import { Text, Container, Link } from '@chakra-ui/react'

const BioElement = ({ year, children, link }) => {
    return (
        <Container>
            <Text fontWeight="bold" fontSize="20px" mt="8px">
                {year}
            </Text>
            <Text>
                <Link href={link}>{children}&nbsp;</Link>
            </Text>
        </Container>
    )
}

export default BioElement
