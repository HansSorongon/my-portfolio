import Head from 'next/head'
import { useEffect } from 'react'
import { Router } from 'next/router'
import { motion } from 'framer-motion'
import {
    Image,
    Container,
    Text,
    Button,
    Flex,
    Box,
    useColorModeValue,
    Heading,
    Center,
    Link,
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Paragraph from '../../components/Paragraph'

const CamMD = () => {
    const entireBackground = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.800', '#c0ccd7')

    return (
        <Box>
            <NavBar />
            <Head>
                <title>CamMD - Hans Sorongon</title>
            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <motion.div
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Container mt={120}>
                        <Center>
                            <Heading>CamMD</Heading>
                        </Center>
                        <Image
                            padding={1}
                            rounded={15}
                            width="500px"
                            src="/cammd.png"
                            mt={7}
                            alt="cammd"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Box>
                                <Paragraph header="ABOUT">
                                    A desktop application that utilizes object
                                    detection with the help of different
                                    open-source libraries to identify different
                                    injuries or visible symptoms and give
                                    corresponding treatment based on the injury
                                    scanned. Treatments are stored within a
                                    database to ensure that citizens without
                                    access to the internet or nearby facilities
                                    will still have access to treatment. <br />
                                    <br />
                                    &nbsp;&nbsp;CamMD was me and my group&apos;s
                                    first ever hackathon project after joining
                                    our first ever hackathon Impact Hub Manila
                                    Health 2021. Our pitch and prototype
                                    received first place in the competition. The
                                    prototype however is incomplete due to the
                                    lack of data to train the model.
                                </Paragraph>
                                <Container
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    mt={8}
                                    color={useColorModeValue(
                                        'blue.600',
                                        'blue.500'
                                    )}
                                    mb="4vh"
                                >
                                    <Link
                                        href="https://github.com/HansSorongon/CamMD"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button mr="1vh">
                                            <IoLogoGithub fontSize={18} />
                                            &nbsp;See on GitHub!
                                        </Button>
                                    </Link>
                                </Container>
                            </Box>
                        </motion.div>
                    </Container>
                </motion.div>
            </motion.div>
        </Box>
    )
}

export default CamMD
