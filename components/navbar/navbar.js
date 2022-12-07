import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, Center, Button } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function NavBar() {
    const [isDesktop] = useMediaQuery('(min-width: 62em)')
    
    useEffect(() => {
        if (window.scrollY == 0){
            console.log("thing")
        }

    })

    return (
        <Center
            bg='teal.500'
            color='gray.100'
            boxShadow='base'
            pos='fixed'
            width='100%'
            zIndex={900}
        >
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                width={{ base: '100%', lg: '6xl' }}
            >
                <Text
                    margin='.5em 1em'
                    fontSize='2xl'
                    fontWeight='500'
                    as='i'
                    cursor='pointer'
                >
                    yesNo
                </Text>
                {
                    isDesktop ?
                        (
                            <Box
                                
                            >
                                {/* <Text>Home</Text>
                                <Text>Features</Text>
                                <Text>Docs</Text>
                                <Text>Pricing</Text> */}
                                <Button
                                variant='ghost'
                                >Home</Button>
                                <Button
                                variant='ghost'
                                >Features</Button>
                                <Button
                                variant='ghost'
                                >Docs</Button>
                                <Button
                                variant='ghost'
                                >Pricing</Button>
                            </Box>
                        ) : (
                            <Box
                                margin='.4em .5em'
                            >
                                <HamburgerIcon boxSize={10} />
                            </Box>

                        )
                }
            </Box>
        </Center>
    )
}