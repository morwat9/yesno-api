import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import styles from "./documentation.module.css";

export default function Documentation() {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent="center"
      alignItems="center"
      paddingTop={{ base: "5em", lg: "10em" }}
    >
      <Box
        lineHeight="10"
        padding="0 2em"
        width={{ base: "base", md: "40em", lg: "30em" }}
      >
        <Text fontSize="4xl" as="b">
          {"yesNo Public API Docs"}
        </Text>
        <Text lineHeight="normal">
          {"yesNo API is a RESTful API that returns json."}
        </Text>
        <Text>{"API URL: https://api.yesnoapi.xyz/api/"}</Text>
        <Text as="b" fontSize="xl">
          {"GET /question/{question}/"}
        </Text>
        <UnorderedList listStyleType="none">
          <ListItem lineHeight="base">
            {"Returns an answer to a yes or no question."}
          </ListItem>
          <ListItem as="b">{"URL Parameters"}</ListItem>
          <ListItem lineHeight="base">
            {`question: the question you'd like to ask`} <br /> <br />{" "}
            {`Please submit questions all as one word with no special characters. The server crashes and I have to restart it if it encounters a question mark.`}
          </ListItem>
          <ListItem as="b">{"Example"}</ListItem>
          <ListItem>
            {".../api/question/ShouldITripleInvestInYesNoCoin"}
          </ListItem>
        </UnorderedList>
      </Box>
      <Box
        margin={{ base: "3em 1em", lg: "0 0 0 2em" }}
        width={{ base: "90%", md: "35em", lg: "30em" }}
      >
        <Text>{`Example Response (Doesn't work yet :( )`}</Text>
        <div className={styles["terminal"]}>
          <pre>
            {`$ curl https://api.yesnoapi.xyz/api/question/ArePetBirthdaysLegitimate`}
            <br />
            <br />
            {"{"} <br />
            {`  "answer": "yes",`}
            <br />
            {`  "ad": "yesNo coin is the next big thing!"`}
            <br />
            {"}"}
          </pre>
        </div>
      </Box>
    </Box>
  );
}
