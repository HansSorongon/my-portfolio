import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

const PageLink = ({ children, href, decor }) => {
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link style={{ textDecoration: decor ? 'default' : 'none' }}>
                {children}
            </Link>
        </NextLink>
    )
}

export default PageLink
