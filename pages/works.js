import Head from 'next/head'
import { motion } from 'framer-motion'
import {
    Text,
    Box,
    Flex,
    Container,
    Heading,
    Image,
    useColorModeValue,
    Progress,
} from '@chakra-ui/react'

import Footer from '../components/Footer'
import WorkElement from '../components/WorkElement'
import StandardBox from '../components/StandardBox'
import SectionHeader from '../components/SectionHeader'
import NavBar from '../components/NavBar'

const WorksPage = () => {
    return (
        <Box>
            <NavBar />
            <Head>
                <title>Works - Hans Sorongon</title>
            </Head>
            <Box>
                <Flex justify="center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9 }}
                    >
                        <Container mb="2vh">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <SectionHeader
                                    mt="12vh"
                                    fontSize="2xl"
                                    color="#363636"
                                >
                                    2022 PERSONAL PROJECTS
                                    <Progress
                                        size="xs"
                                        isIndeterminate
                                        mt={3}
                                    />
                                </SectionHeader>
                                <WorkElement
                                    header="Minimanga"
                                    techUsed="Expo, React Native, NativeBase, Axios"
                                    link="https://github.com/HansSorongon/minimanga"
                                    github
                                >
                                    A minimalist manga reader app for iOS and
                                    Android made on top of Mangadex&apos;s API.
                                    Currently supports searching and reading
                                    manga online with requests through
                                    Mangadex&apos;s API. Also, dark mode!
                                </WorkElement>
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: '0.2' }}
                            >
                                <WorkElement
                                    header="Portfolio Website"
                                    techUsed="JavaScript,
                                NextJS, ChakraUI, Framer Motion, ThreeJS, Blender"
                                    link="https://github.com/HansSorongon/my-portfolio"
                                    github={true}
                                >
                                    A responsive portfolio made with different
                                    frontend technologies. Laptop model was made
                                    with MagicaVoxel and Blender and rendered on
                                    the web with three-fiber.
                                </WorkElement>
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: '0.3' }}
                            >
                                <WorkElement
                                    header="Sorting Algorithm Visualizer"
                                    techUsed="Python, Pygame"
                                    link="https://github.com/HansSorongon/sorting-algorithms-visualizer"
                                    github
                                >
                                    A simple sorting algorithm visualizer made
                                    with Pygame and Python.
                                </WorkElement>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: '0.4' }}
                                >
                                    <WorkElement
                                        header="Conway Web"
                                        techUsed="Chakra UI, NextJS"
                                        link="https://conway-web-two.vercel.app"
                                        visit
                                    >
                                        A simple informative website about
                                        Conway&apos;s game of life with an
                                        interactive background. Clicking on the
                                        background will spawn r-pentominos.
                                    </WorkElement>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, delay: '0.4' }}
                                >
                                    <WorkElement
                                        header="Markdown Blog"
                                        techUsed="MongoDB, Mongoose, Express, Bootstrap, HTML"
                                        link="https://github.com/HansSorongon/markdown-blog-1"
                                        github
                                    >
                                        A simple markdown blog utilizing CRUD
                                        Operation fundamentals with MongoDB. I
                                        plan to remake this in the future with
                                        different frameworks/libraries.
                                    </WorkElement>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: '0.5' }}
                            >
                                <SectionHeader
                                    mt="5vh"
                                    fontSize="2xl"
                                    color="#363636"
                                >
                                    HACKATHON PROJECTS
                                    <Progress
                                        size="xs"
                                        isIndeterminate
                                        mt={3}
                                    />
                                </SectionHeader>
                                <WorkElement
                                    header="CamMD Prototype"
                                    techUsed="Python, PyQT5, OpenCV, SQLite"
                                    link="/works/cam-md"
                                    read
                                >
                                    A desktop application that utilizes object
                                    detection identify different injuries or
                                    visible symptoms and give corresponding
                                    treatment based on the injury scanned.
                                    Prototype made with a team of three.
                                </WorkElement>
                            </motion.div>
                        </Container>
                    </motion.div>
                </Flex>
            </Box>
            <Footer />
        </Box>
    )
}

export default WorksPage
