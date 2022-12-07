import { Box, Text, Center, List, ListIcon, ListItem, Button } from "@chakra-ui/react"
import { CheckIcon, SmallCloseIcon } from "@chakra-ui/icons"

export default function Pricing() {
    return (
        <Box
            display='flex'
            flexDirection={{ base: 'column' }}
            alignItems='center'
            marginTop={{ base: '15em', lg: '5em' }}
        >
            <Box
                textAlign='center'
            >
                <Text
                    fontWeight={700}
                    fontSize='sm'
                    color='teal.500'
                >PRICING</Text>
                <Text
                    as='b'
                    fontSize='3xl'
                >Pricing Options Table</Text>
            </Box>
            <Box
                display='flex'
                flexDirection={{ base: 'column', lg: 'row' }}
            >
                <Box
                    outline='1px solid #bfbfbf'
                    borderRadius='md'
                    width='18em'
                    height='30em'
                    margin='1em'
                >
                    <Center>
                        <Box
                            height='10em'
                            borderBottom='1px solid #bfbfbf'
                            width='70%'
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                        >
                            <Text
                                fontWeight={700}
                                fontSize='lg'
                                color='teal.500'
                            >PUBLIC</Text>
                            <Text
                                fontSize='4xl'
                                fontWeight={700}
                            >Free</Text>
                        </Box>
                    </Center>
                    <Box
                        display='flex'
                        justifyContent='center'
                    >
                        <Box
                            marginTop='2em'
                        >
                            <List
                                lineHeight='taller'
                            >
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    yesNo API route
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    All Yes/No questions
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SmallCloseIcon} />
                                    No advertisements
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SmallCloseIcon} />
                                    Answer Variations
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SmallCloseIcon} />
                                    24/7 Support
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Box
                    outline='1px solid #bfbfbf'
                    borderRadius='md'
                    width='18em'
                    height='30em'
                    margin='1em'
                >
                    <Center>
                        <Box
                            height='10em'
                            borderBottom='1px solid #bfbfbf'
                            width='70%'
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                        >
                            <Text
                                fontWeight={700}
                                fontSize='lg'
                                color='teal.500'
                            >PREMIUM</Text>
                            <Text
                                fontSize='4xl'
                                fontWeight={700}
                            >$1.99/mo</Text>
                        </Box>
                    </Center>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <Box
                            marginTop='2em'
                        >
                            <List
                                lineHeight='taller'
                            >
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    yesNo API route
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    All Yes/No questions
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    No advertisements
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SmallCloseIcon} />
                                    Answer Variations
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={SmallCloseIcon} />
                                    24/7 Support
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            marginTop='1em'
                        >
                            <Button
                                size='md'
                                color='white'
                                borderRadius='100px'
                                marginTop='2em'
                                p='0 2em'
                                fontSize='sm'
                                fontWeight='bold'
                                backgroundColor='teal.500'
                            >SIGN UP</Button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    outline='1px solid #bfbfbf'
                    borderRadius='md'
                    width='18em'
                    height='30em'
                    margin='1em'
                >
                    <Center>
                        <Box
                            height='10em'
                            borderBottom='1px solid #bfbfbf'
                            width='70%'
                            textAlign='center'
                            display='flex'
                            flexDirection='column'
                            justifyContent='center'
                        >
                            <Text
                                fontWeight={700}
                                fontSize='lg'
                                color='teal.500'
                            >ENTERPRISE</Text>
                            <Text
                                fontSize='4xl'
                                fontWeight={700}
                            >$99.99/mo</Text>
                        </Box>
                    </Center>
                    <Box
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                    >
                        <Box
                            marginTop='2em'
                        >
                            <List
                                lineHeight='taller'
                            >
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    yesNo API route
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    All Yes/No questions
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    No advertisements
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    Answer Variations
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckIcon} color='teal.500' />
                                    24/7 Support
                                </ListItem>
                            </List>
                        </Box>
                        <Box
                            marginTop='1em'
                        >
                            <Button
                                size='md'
                                color='white'
                                borderRadius='100px'
                                marginTop='2em'
                                p='0 2em'
                                fontSize='sm'
                                fontWeight='bold'
                                backgroundColor='teal.500'
                            >SIGN UP</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}