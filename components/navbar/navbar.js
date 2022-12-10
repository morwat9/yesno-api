import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Center,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function NavBar() {
  const [isDesktop] = useMediaQuery("(min-width: 62em)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center
        bg="teal.500"
        color="gray.100"
        boxShadow="base"
        pos="fixed"
        width="100%"
        zIndex={900}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ base: "100%", lg: "6xl" }}
        >
          <Link href="#home" style={{ textDecoration: "none" }}>
            <Text
              margin=".5em 1em"
              fontSize="2xl"
              fontWeight="500"
              as="i"
              cursor="pointer"
            >
              {`yesNo`}
            </Text>
          </Link>
          {isDesktop ? (
            <Box>
              <Link href="#home">
                <Box
                  as="button"
                  padding=".25em"
                  margin=".75em"
                  borderRadius="5px"
                  fontWeight={600}
                >
                  Home
                </Box>
              </Link>
              <Link href="#features">
                <Box
                  as="button"
                  padding=".25em"
                  margin=".75em"
                  borderRadius="5px"
                  fontWeight={600}
                >
                  Features
                </Box>
              </Link>
              <Link href="#docs">
                <Box
                  as="button"
                  padding=".25em"
                  margin=".75em"
                  borderRadius="5px"
                  fontWeight={600}
                >
                  Docs
                </Box>
              </Link>
              <Link href="#pricing">
                <Box
                  as="button"
                  padding=".25em"
                  margin=".75em"
                  borderRadius="5px"
                  fontWeight={600}
                >
                  Pricing
                </Box>
              </Link>
            </Box>
          ) : (
            <Box margin=".4em .5em">
              <HamburgerIcon boxSize={10} onClick={onOpen} />
            </Box>
          )}
        </Box>
      </Center>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            backgroundColor="teal.500"
            color="white"
            lineHeight="taller"
            fontSize="2xl"
          >
            <Link
              style={{ textDecoration: "none" }}
              href="#home"
              onClick={onClose}
            >
              <Text>Home</Text>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="#features"
              onClick={onClose}
            >
              <Text>Features</Text>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="#docs"
              onClick={onClose}
            >
              <Text>Docs</Text>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href="#pricing"
              onClick={onClose}
            >
              <Text>Pricing</Text>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
