import { Box, Text, Image } from "@chakra-ui/react"

export default function Features() {
    return (
        <Box
            flexDir='column'
            display='flex'
            paddingTop='3em'
            alignItems='center'

        >
            <Box
                textAlign='center'
            >
                <Text
                    fontSize='sm'
                    fontWeight={700}
                    color='teal.500'
                >
                    {`FEATURES`}
                </Text>
                <Text
                    fontSize='3xl'
                    as='b'

                >
                    {`Our API has all the answers you'll ever need`}
                </Text>
            </Box>
            <Box
                display='flex'
                justifyContent='space-around'
                width={{base: 'auto',lg: 'container.lg'}}
                padding='3em'
                textAlign='center'
                flexDirection={{base: 'column', lg: 'row'}}
            >
                <Box>
                    <Image src='/card-image1.svg' height={250} width={250} />
                    <Text
                        as='b'
                        color='teal.500'
                        fontSize='lg'
                    >{`Ask Away`}</Text>
                    <Text
                        fontSize='sm'
                    >{`Any Yes/No questions are answered`}<br />{`immediately with some success`}</Text>
                </Box>
                <Box
                padding={{base: '2em 0', lg: '0'}}
                >
                    <Image src='/card-image2.svg' height={250} width={250} />
                    <Text
                        as='b'
                        color='teal.500'
                        fontSize='lg'
                    >{`Questions Answered`}</Text>
                    <Text
                        fontSize='sm'
                    >{`If yes, make it so! If  not, do not do`} <br />{`that thing`}</Text>
                </Box>
                <Box>
                    <Image src='/card-image3.svg' height={250} width={250} />
                    <Text
                        as='b'
                        color='teal.500'
                        fontSize='lg'
                    >{`Done`}</Text>
                    <Text
                        fontSize='sm'
                    >{`Rest easy knowing your question has been`} <br />{`answered, regardless of context or`}<br /> {`accuracy`}</Text>
                </Box>
            </Box>
        </Box>
    )
}