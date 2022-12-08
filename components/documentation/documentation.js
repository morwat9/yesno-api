import { Box, Text, UnorderedList, ListItem, List } from "@chakra-ui/react"
import styles from './documentation.module.css'

export default function Documentation() {

    return (
        <Box
            display='flex'
            flexDirection={{ base: 'column', lg: 'row' }}
            justifyContent='center'
            paddingTop={{ base: '5em', lg: '10em' }}

        >
            <Box
                boxSize={{ base: 'auto', lg: 'container.sm' }}
                lineHeight='10'
                paddingLeft='2em'
            >
                <Text
                    fontSize='4xl'
                    as='b'
                >
                    {'yesNo Public API Docs'}
                </Text>
                <Text>
                    {'yesNo API is a RESTful API that returns json.'}
                </Text>
                <Text>
                    {'API URL: https://api.yesnoapi.xyz/api/'}
                </Text>
                <Text
                    as='b'
                    fontSize='xl'
                >
                    {'GET /question/{question}/'}
                </Text>
                <UnorderedList
                    listStyleType='none'
                >
                    <ListItem>{'Returns an answer to a yes or no question.'}</ListItem>
                    <ListItem as='b'>{'URL Parameters'}</ListItem>
                    <ListItem lineHeight='base'>{`question: the question you'd like to ask`} <br/> <br/> {`Please submit questions all as one word with no special characters. The server crashes and I have to restart it if it encounters a question mark.`}</ListItem>
                    <ListItem as='b'>{'Example'}</ListItem>
                    <ListItem>{'.../api/question/ShouldITripleInvestInYesNoCoin'}</ListItem>
                </UnorderedList>
            </Box>
            <Box
                margin={{ base: '3em 1em', lg: '0 0 0 2em' }}
                width={{ base: 'auto', lg: '30em' }}
            >
                <Text>{`Example API Response (Doesn't work yet :( )`}</Text>
                <div className={styles['terminal']}>
                    <pre>$ curl https://api.yesnoapi.xyz/api/question/ArePetBirthdaysLegitimate<br />
                        <br />
                        {'{'} <br />
                        {`  "answer": "yes"`}<br />
                        {'}'}
                    </pre>
                </div>
            </Box>
        </Box>
    )
}