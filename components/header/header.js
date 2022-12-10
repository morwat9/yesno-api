import { Box, Text, Heading, Button, Image, Link } from "@chakra-ui/react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <>
      <Box
        height={{ base: "auto", lg: "25em" }}
        bg="teal.500"
        color="gray.100"
        padding={{ base: "3em 4em 4em", lg: "3em 5em 4em", xl: "4em 12em 4em" }}
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        textAlign={{ base: "center", lg: "left" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box marginRight={{ xl: "-10" }} zIndex={875}>
          <Heading
            as="h1"
            size={{ base: "2xl", lg: "3xl" }}
            paddingTop="2.75em"
            fontWeight={600}
          >{`yesNo API`}</Heading>
          <Text
            paddingTop="2em"
            fontWeight={500}
          >{`Use yesNo to help with your most important decisions!`}</Text>
          <Link href="#docs">
            <Button
              size="lg"
              color="teal.500"
              borderRadius="100px"
              marginTop="2em"
              p="0 3em"
              fontSize="sm"
              fontWeight="bold"
              outline="3px solid"
              outlineColor="teal.500"
            >{`VIEW DOCS`}</Button>
          </Link>
        </Box>
        <Image
          src="./software-things.png"
          objectFit="contain"
          paddingTop={{ base: "0", lg: "5em" }}
          boxSize={{ base: "md", lg: "sm", xl: "xl" }}
          position="relative"
          marginBottom={{ base: "0", lg: "-72" }}
          marginRight={{ base: "0", xl: "-32" }}
          zIndex={850}
        />
      </Box>
      <Box zIndex={950}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1920 310"
          className={styles["svg-border"]}
        >
          <path d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"></path>
        </svg>
      </Box>
    </>
  );
}
