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
    Progress,
    Center,
    Link,
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { ChevronRightIcon } from '@chakra-ui/icons'

import Footer from '../../components/Footer'
import NavBar from '../../components/NavBar'
import Paragraph from '../../components/Paragraph'
import SectionHeader from '../../components/SectionHeader'

const CamMD = () => {
    const entireBackground = useColorModeValue('white', 'gray.800')
    const borderColor = useColorModeValue('gray.800', '#c0ccd7')

    return (
        <Box>
            <NavBar />
            <Head>
                <title>Tekken Insider - Hans Sorongon</title>
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
                            rounded={15}
                            width="700px"
                            src="/tekkinsider1.png"
                            mt={7}
                            alt="cammd"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Box mb="6vh">
                                <Paragraph header="ABOUT">
                                  A full-stack web application for fans of the video game franchise &quot;Tekken&quot;. This project
                                  was made in compliance with the requirements of the course CCAPDEV. This was done in a group
                                  of four. Despite having previous experience with full-stack development, I learned quite a lot
                                  in the development of this web app. One requirement in the creation of this project was the use
                                  of the Express library. My group however, only found out about this requirement after committing
                                  to using the Next library. This essentially forced me to learn how to work with custom servers with Next.js 14.
                                  Working on this project also developed my skills in working in a team environment. This project integrated
                                  multiple cloud-based solutions such as MongoDB Atlas and Cloudinary.
                                </Paragraph>

                                <SectionHeader fontSize={24} color="#363636">
                                    SCREENSHOTS 
                                    <Progress size="xs" isIndeterminate mt={3} />
                                </SectionHeader>

                                <Image
                                    rounded={15}
                                    width="700px"
                                    src="/tekkinsider2.png"
                                    mt={7}
                                    alt="cammd"
                                />
                                <Image
                                    rounded={15}
                                    width="700px"
                                    src="/tekkinsider3.png"
                                    mt={7}
                                    alt="cammd"
                                />
                            </Box>
                        </motion.div>
                    </Container>
                </motion.div>
            </motion.div>
        </Box>
    )
}

export default CamMD
