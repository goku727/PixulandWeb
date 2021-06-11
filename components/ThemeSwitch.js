import { useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeSwitch() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            Tema:{" "}
            {colorMode === "light" ? (
                <SunIcon ml="5px" />
            ) : (
                <MoonIcon ml="5px" />
            )}
        </Button>
    );
}
