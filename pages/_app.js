import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";

function YesOrNo({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default YesOrNo;
