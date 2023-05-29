import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => (
  <HStack>
    <Image src={logo}></Image>
    <Text>NavBar</Text>
  </HStack>
);

export default NavBar;
