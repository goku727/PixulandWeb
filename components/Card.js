import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

export default function Card(props) {
    return (
        <Center py={6}>
            <Box
                minH={"full"}
                maxW={props.mwidth}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                borderRadius="10px"
            >
                <Center mt="1%" w="100%" h="100%">
                    {props.icon}
                </Center>

                {props.children}
            </Box>
        </Center>
    );
}
