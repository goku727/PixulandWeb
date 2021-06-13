import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <ChakraProvider>
            <Nav active={router.asPath} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default App;
