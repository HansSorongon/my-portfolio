import {
    Container,
    Button,
    Text,
    Spinner,
    Flex,
    useColorModeValue,
    Box,
} from '@chakra-ui/react'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

// const Model = React.lazy(() => import('./Laptop'))
import Model from './Laptop'

const CamController = () => {
    const { camera, gl } = useThree()

    useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement)

        controls.minDistance = 3
        controls.maxDistance = 20
        return () => {
            controls.dispose()
        }
    }, [camera, gl])
}

const ThreeLaptop = (props) => {
    const { x, y, z } = { x: -2.7, y: 2.5, z: 3 } // 5.8

    return (
        <Suspense
            fallback={
                <Container
                    h={300}
                    mt="40px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Spinner
                        color={useColorModeValue('blue.600', 'blue.200')}
                    />
                </Container>
            }
        >
            <Container {...props}>
                <Canvas
                    camera={{
                        zoom: 0.7,
                        fov: 65,
                        near: 0.1,
                        far: 1000,
                        position: [x, y, z],
                    }}
                >
                    <ambientLight intensity={0.9} />
                    <pointLight position={[100, 100, 100]} />
                    <Model />
                </Canvas>
            </Container>
        </Suspense>
    )
}

export default ThreeLaptop
