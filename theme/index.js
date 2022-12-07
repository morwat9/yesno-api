import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
    config: {
        initialColorMode: 'light'
    },
    fonts: {
        heading: `'Alexandria', sans-serif;` 
    }
});

export default theme;