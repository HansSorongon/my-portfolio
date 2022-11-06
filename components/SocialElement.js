import { Container, Text, Link, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const SocialElement = ({ children, icon, link, noAt }) => {
    return (
        <Container display="flex" alignItems="center" fontSize="20px" mt={1}>
            {icon}&nbsp;
            <Link href={link}>
                {!noAt ? (
                    <Flex alignItems="center">
                        <Text>@{children}&nbsp;</Text>
                        <ExternalLinkIcon fontSize="16px" />
                    </Flex>
                ) : (
                    <Flex alignItems="center">
                        <Text>&nbsp;{children}&nbsp;</Text>
                        <ExternalLinkIcon fontSize="16px" />
                    </Flex>
                )}
            </Link>
        </Container>
    )
}

export default SocialElement
