import React from "react";
import { Box, Text, Center, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
    return (
        <footer>
            <Box
                pos="absolute"
                top="100%"
                width="100%"
                bg={useColorModeValue("white", "gray.800")}
                h={{ base: "100px", sm: "60px" }}
            >
                <Center h={{ base: "100px", sm: "60px" }}>
                    <Text>Copyright © 2021 </Text>

                    <Text
                        color={useColorModeValue("green.700", "green.100")}
                        display="inline"
                        fontWeight="bold"
                    >
                        Pixuland Network
                    </Text>

                    <Text>
                        | Todos los derechos Reservados | No estamos afiliados
                        con Mojang AB
                    </Text>
                </Center>
            </Box>
        </footer>
    );
}
