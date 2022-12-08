import { Box, Text, Image } from "@chakra-ui/react";

export default function Features() {
  return (
    <Box flexDir="column" display="flex" paddingTop="8em" alignItems="center">
      <Box textAlign="center" padding="2em 2em">
        <Text fontSize="sm" fontWeight={700} color="teal.500">
          {`FEATURES`}
        </Text>
        <Text fontSize="3xl" as="b">
          {`Our API has all the answers you'll ever need`}
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        width={{ base: "auto", lg: "container.lg" }}
        padding={{base: 'auto', lg: "3em"}}
        textAlign="center"
        flexDirection={{ base: "column", lg: "row" }}
        flexWrap="wrap"
      >
        <Box width={{ base: 200, md: 300, lg: 250 }}>
          <Image
            src="/card-image1.svg"
            height={{ base: 200, md: 300, lg: 250 }}
            width={{ base: 200, md: 300, lg: 250 }}
          />
          <Text as="b" color="teal.500" fontSize="lg">{`Ask Away`}</Text>
          <Text fontSize="sm">{`Any Yes/No questions are answered immediately with some success`}</Text>
        </Box>
        <Box width={{ base: 200, md: 300, lg: 250 }}>
          <Image
            src="/card-image2.svg"
            height={{ base: 200, md: 300, lg: 250 }}
            width={{ base: 200, md: 300, lg: 250 }}
          />
          <Text
            as="b"
            color="teal.500"
            fontSize="lg"
          >{`Questions Answered`}</Text>
          <Text fontSize="sm">{`If yes, make it so! If  not, do not do that thing`}</Text>
        </Box>
        <Box width={{ base: 200, md: 300, lg: 250 }}>
          <Image
            src="/card-image3.svg"
            height={{ base: 200, md: 300, lg: 250 }}
            width={{ base: 200, md: 300, lg: 250 }}
          />
          <Text as="b" color="teal.500" fontSize="lg">{`Done`}</Text>
          <Text fontSize="sm">{`Rest easy knowing your question has been answered, regardless of context or accuracy`}</Text>
        </Box>
      </Box>
    </Box>
  );
}
