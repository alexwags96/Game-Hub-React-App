import { HStack, Hide, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Hide below="sm">
        <Text>Dark Mode</Text>
      </Hide>
    </HStack>
  );
};

export default ColorModeSwitch;
