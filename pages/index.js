// design inspiration from craftz.dog!
import { useEffect, useState } from 'react'
import {
    Flex,
    Heading,
    Button,
    useColorModeValue,
    Box,
    Container,
    Image,
    Text, Progress,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import {  EmailIcon } from '@chakra-ui/icons'
import {
    IoLogoGithub,
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoInstagram,
} from 'react-icons/io5'
import { HiDocumentDownload } from 'react-icons/hi'

import links from '../lib/links.json'
import facts from '../lib/facts.json'
import Footer from '../components/Footer'
import SocialElement from '../components/SocialElement'
import SectionHeader from '../components/SectionHeader'
import ThreeLaptop from '../components/laptop/ThreeLaptop'
import BioElement from '../components/BioElement'
import StandardBox from '../components/StandardBox'
import NavBar from '../components/NavBar'
import Paragraph from '../components/Paragraph'

const Home = () => {
    const [fact, setFact] = useState('Want to know more about me?')

    const getAge = () => {
        const birthday = new Date('08/12/2003').getTime()
        const currentDate = new Date().getTime()

        const difference = currentDate - birthday
        const age = Math.floor(difference / 1000 / 60 / 60 / 24 / 365)

        return age
    }

    getAge()

    const handleRandomizer = () => {
        const keys = Object.keys(facts)
        const rand = Math.floor(Math.random() * keys.length)
        setFact(facts[keys[rand]])
    }

    // lol
    useEffect(() => {
      const d = new Date()
      if (d.getDay() == 4 && (d.getHours() >= 9 && d.getHours() < 13)) {
        window.location.href='http://www.gamalielplazaras.gay'
      }
    })

    return (
        <Box>
            <NavBar />
            <Flex>
                <Container justifyContent="center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        <ThreeLaptop
                            mt="40px"
                            h={300}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: -35, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Flex justifyContent="center">
                            <Box>
                                <Heading
                                    as="h2"
                                    fontSize={'4xl'}
                                    mt={12}
                                    mr={18}
                                >
                                    Hi, I&apos;m{' '}
                                    <Text
                                        as="span"
                                        color={useColorModeValue(
                                            'blue.600',
                                            'blue.200'
                                        )}
                                    >
                                       Hans
                                    </Text>
                                    !
                                </Heading>
                                <Text
                                    sx={{
                                        '@media only screen and (max-width: 490px)':
                                            {
                                                display: 'none',
                                            },
                                    }}
                                >
                                    Software Developer
                                </Text>
                            </Box>
                            <Image
                                borderRadius="full"
                                boxSize="110px"
                                display="inline-block"
                                src="/profile.png"
                                alt="Hans Sorongon"
                                mt={5}
                            />
                        </Flex>
                        <Box>
                            <Paragraph header="ABOUT ME">
                                I am a {getAge()} year old software developer
                                currently based in the Philippines. Over the
                                past years I have acquired multiple skills in
                                both frontend and backend development. I work
                                primarily with{' '}
                                <strong>JavaScript (MERN Stack)</strong>{' '}
                                and&nbsp;
                                <strong>Python</strong>. I am passionate about
                                creating solutions for different problems and
                                have joined multiple hackathons to express my
                                interest. Currently I am majoring in B.S.
                                Computer Science. I enjoy tinkering with
                                technology and making projects for fun!
                            </Paragraph>
                            <Flex justify="center" mb={14}>
                                <Button
                                    bg={useColorModeValue(
                                        'blue.100',
                                        'blue.900'
                                    )}
                                    color={useColorModeValue(
                                        'blue.900',
                                        'white'
                                    )}
                                    onClick={() =>
                                        alert('Check again next time!')
                                    }
                                >
                                    Download Resume&nbsp;
                                    <HiDocumentDownload />
                                </Button>
                            </Flex>
                        </Box>
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: -25, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <StandardBox header="BIO">
                                <BioElement year="2003" link={links.link1}>
                                    Born in Davao City, Philippines.
                                </BioElement>
                                <BioElement year="2022" link={links.link2}>
                                    Graduated High School at Ateneo de Davao
                                    University Senior High School.
                                </BioElement>
                                <BioElement
                                    year="2022 to present"
                                    link={links.link3}
                                >
                                    Taking BS Computer Science at De La Salle
                                    University Manila.
                                </BioElement>
                            </StandardBox>
                        </motion.div>

                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: -25, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <SectionHeader fontSize={24} color="#363636">
                                SOCIALS
                            </SectionHeader>
                            <Container mt={3}>
                                <Progress size="xs" isIndeterminate mb={4} />
                                <Text fontSize="18px" mb={4}>
                                    Check out some of my projects and feel free
                                    to contact me if you&apos;d like to work
                                    together.
                                </Text>
                                <Box
                                    color={useColorModeValue(
                                        'blue.600',
                                        'blue.500'
                                    )}
                                >
                                    <SocialElement
                                        icon={
                                            <EmailIcon
                                                fontSize="16px"
                                                mt="3px"
                                                ml="1px"
                                            />
                                        }
                                        link="mailto:hanssorongonn@gmail.com"
                                        noAt
                                    >
                                        hanssorongon
                                    </SocialElement>
                                    <SocialElement
                                        icon={<IoLogoGithub />}
                                        link="https://github.com/HansSorongon"
                                    >
                                        HansSorongon
                                    </SocialElement>
                                    <SocialElement
                                        icon={<IoLogoTwitter />}
                                        link="https://twitter.com/HansSorongon"
                                    >
                                        HansSorongon
                                    </SocialElement>
                                    <SocialElement
                                        icon={<IoLogoFacebook />}
                                        link="https://facebook.com/HansSorongon"
                                    >
                                        {' '}
                                        HansSorongon
                                    </SocialElement>
                                    <SocialElement
                                        icon={<IoLogoInstagram />}
                                        link="https://www.instagram.com/hansorongon/"
                                    >
                                        hansorongon
                                    </SocialElement>
                                </Box>
                            </Container>
                        </motion.div>
                        <Container display="flex" alignItems="center">
                            <Button
                                bg={useColorModeValue('blue.200', '#19191c')}
                                mr={5}
                                onClick={handleRandomizer}
                            >
                                Fun Fact!
                            </Button>
                            <Text fontSize="18px">{fact}</Text>
                        </Container>
                    </motion.div>
                    <Footer />
                </Container>
            </Flex>
        </Box>
    )
}

export default Home
