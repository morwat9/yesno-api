import {
  Box,
  Text,
  List,
  ListIcon,
  ListItem,
  Center,
  Link,
} from "@chakra-ui/react";
import {
  ChevronRightIcon,
  EmailIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <Box paddingTop="5em" color={{ base: "white" }}>
      <svg
        className={styles["svg-border"]}
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 79"
      >
        <path
          d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
          transform="translate(0 -0.188)"
        ></path>
      </svg>
      <Box backgroundColor="teal.500">
        <Center>
          <Box
            display="flex"
            flexDirection={{ base: "column", lg: "row" }}
            justifyContent="space-around"
            width={{ lg: "65%" }}
            margin={{ base: "3em" }}
            minWidth={{ lg: "880px" }}
          >
            <Box width={{ base: "17em", md: "30em", lg: "17em" }}>
              <Text
                fontWeight={700}
                fontSize="lg"
                marginBottom="1em"
              >{`About yesNo`}</Text>
              <Text fontSize="sm">{`We've made it our lives to give you the answers you may or may not need so that you can concentrate on the important stuff.`}</Text>
            </Box>
            <Box width={{ base: "17em" }}>
              <Text
                fontWeight={700}
                fontSize="lg"
                marginBottom="1em"
                marginTop={{ base: "1em", lg: "0" }}
              >{`Important Links`}</Text>
              <List fontSize="sm" lineHeight="taller">
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  {`Info on our algorithms: `}
                  <Link
                    isExternal
                    href="https://en.wikipedia.org/wiki/Coin_flipping"
                  >
                    {`Wikipedia`} <ExternalLinkIcon mx="1px" />
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={ChevronRightIcon} />
                  {`isEven Api: `}
                  <Link isExternal href="https://isevenapi.xyz/">
                    {`isEven`} <ExternalLinkIcon mx="1px" />
                  </Link>
                </ListItem>
              </List>
            </Box>
            <Box width={{ base: "17em" }}>
              <Text
                fontWeight={700}
                fontSize="lg"
                marginBottom="1em"
                marginTop={{ base: "1em", lg: "0" }}
              >{`Contact`}</Text>
              <List fontSize="sm">
                <ListItem>
                  <ListIcon as={EmailIcon} />
                  <Link isExternal href="mailto:morwat9@hotmail.com">
                    {"morwat9@hotmail.com"}
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Center>
        <Center>
          <Box
            borderTop="1px solid #bfbfbf"
            width={{ base: "80%", md: "60%" }}
            textAlign="center"
          >
            <Text margin="2em" fontSize="sm">
              {`2022 Michael Orwat`}
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
}
