import {
    Heading,
    Text,
    Box,
    Center,
    Icon,
    useColorModeValue,
    Grid,
} from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Nav";
import Card from "../components/Card";

import { FiFastForward } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";
import { MdSignalWifi4Bar, MdDateRange, MdPersonAdd } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pixuland Network | Inicio</title>
                <meta property="og:site_name" content="Pixuland Network" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Pixuland Network" />
                <meta property="og_url" content="https://pixuland.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav>
                <Nav active="/" />
            </nav>

            <main>
                <Box backgroundImage="url('/images/img.jpg')" mb={"3rem"}>
                    <Center h={{ base: "500px", md: "750px", lg: "1000px" }}>
                        <Heading
                            mt={{ base: "-200px", md: "-475px" }}
                            as="h1"
                            fontSize={{
                                base: "24px",
                                sm: "34px",
                                md: "40px",
                                lg: "56px",
                            }}
                            color="black"
                        >
                            Pixuland Network
                        </Heading>
                    </Center>
                </Box>
                <Grid
                    templateColumns={{
                        base: "repeat(1, 1fr)",
                        md: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    }}
                    gap={6}
                >
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        icon={
                            <Icon
                                as={FiFastForward}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                Gran velocidad
                            </Text>
                        </Center>
                    </Card>
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        mheight={{ base: "250px", sm: "300px" }}
                        icon={
                            <Icon
                                as={MdPersonAdd}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                Buena Comunidad
                            </Text>
                        </Center>
                    </Card>
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        mheight={{ base: "250px", sm: "300px" }}
                        icon={
                            <Icon
                                as={MdDateRange}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                Eventos Unicos
                            </Text>
                        </Center>
                    </Card>
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        mheight={{ base: "250px", sm: "300px" }}
                        icon={
                            <Icon
                                as={MdSignalWifi4Bar}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                0% Lag
                            </Text>
                        </Center>
                    </Card>
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        mheight={{ base: "250px", sm: "300px" }}
                        icon={
                            <Icon
                                as={FaWrench}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                Plugins Customizados
                            </Text>
                        </Center>
                    </Card>
                    <Card
                        mwidth={{ base: "100%", sm: "350px" }}
                        mheight={{ base: "250px", sm: "300px" }}
                        icon={
                            <Icon
                                as={GrUpdate}
                                color={useColorModeValue("black", "white")}
                                fontSize="60px"
                            />
                        }
                    >
                        <Center h="50px">
                            <Text as="p" fontSize="24px" fontWeight="bold">
                                En la última versión!
                            </Text>
                        </Center>
                    </Card>
                </Grid>
            </main>

            <footer></footer>
        </div>
    );
}
