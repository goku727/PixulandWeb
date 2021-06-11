import Link from "next/link";
import Image from "next/image";
import Nav from "../components/Nav";
import { Center, Text } from "@chakra-ui/react";

export default function FourOhFour() {
    return (
        <>
            <Nav />
            <Center pt="60px" h="100%">
                <Image
                    src="/images/404.gif"
                    alt="Error 404 "
                    width={"800px"}
                    height={"500px"}
                />
            </Center>
            <Center>
                <Text color="red.400" fontSize="44px" fontWeight="bolder">
                    En Construcción.
                </Text>
            </Center>
            <Center>
                <Text>Deja descansar a nuestros minions!!!!</Text>
            </Center>
            <Center>
                <Image
                    src="/images/404.jpg"
                    alt="Error 404 "
                    width={"259px"}
                    height={"194px"}
                />
            </Center>
        </>
    );
}
