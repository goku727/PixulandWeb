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
import Card from "../components/Card";
import Footer from "../components/Footer";

import { FiFastForward } from "react-icons/fi";
import { FaWrench } from "react-icons/fa";
import {
    MdSignalWifi4Bar,
    MdDateRange,
    MdPersonAdd,
    MdUpdate,
} from "react-icons/md";
import { Parallax } from "react-parallax";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Pixuland Network | Inicio</title>
                <meta property="og:site_name" content="Pixuland Network" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Pixuland Network" />
                <meta property="og_url" content="https://pixuland.com" />
                <meta
                    name="description"
                    content="Página óficial de la Network de Pixuland."
                />
                <meta name="robots" content="index" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage="https://xtebbegr.sirv.com/Pixuland/img.jpg"
                    bgImageAlt="Mundo normal"
                    strength={-150}
                    className={styles.parallax}
                >
                    <Box mb={"0"}>
                        <Center h={{ base: "500px", md: "100vh" }}>
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
                        <div style={{ height: "200px" }} />
                    </Box>
                </Parallax>

                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage="https://xtebbegr.sirv.com/Pixuland/img2.jpg"
                    bgImageAlt="Las cuevas"
                    strength={-200}
                    className={styles.parallax}
                >
                    <Box
                        mb={"0"}
                        h={{ base: "250vh", sm: "175vh", md: "100vh" }}
                    >
                        <Center h={{ base: "250vh", sm: "175vh", md: "100vh" }}>
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
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
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
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
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
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
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
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
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
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
                                            Plugins Customizados
                                        </Text>
                                    </Center>
                                </Card>
                                <Card
                                    mwidth={{ base: "100%", sm: "350px" }}
                                    mheight={{ base: "250px", sm: "300px" }}
                                    icon={
                                        <Icon
                                            as={MdUpdate}
                                            color={useColorModeValue(
                                                "black",
                                                "white"
                                            )}
                                            fontSize="60px"
                                        />
                                    }
                                >
                                    <Center h="50px">
                                        <Text
                                            as="p"
                                            fontSize="24px"
                                            fontWeight="bold"
                                        >
                                            En la última versión!
                                        </Text>
                                    </Center>
                                </Card>
                            </Grid>
                        </Center>
                    </Box>
                </Parallax>

                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage="https://xtebbegr.sirv.com/Pixuland/img3.jpg"
                    bgImageAlt="El nether"
                    strength={-200}
                    className={styles.parallax}
                >
                    <Box mb={"0"} h={{ base: "500px", md: "100vh" }}></Box>
                </Parallax>
                <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage="https://xtebbegr.sirv.com/Pixuland/img4.jpg"
                    bgImageAlt="El end"
                    strength={-200}
                    className={styles.parallax}
                >
                    <Box mb={"0"} h={{ base: "500px", md: "100vh" }}></Box>
                </Parallax>
            </main>

            <Footer />
        </div>
    );
}
