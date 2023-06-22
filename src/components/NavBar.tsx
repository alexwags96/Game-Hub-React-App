import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import useGameQueryStore from "../store";

const NavBar = () => {
  const reset = useGameQueryStore((s) => s.SetReset);
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="32px" onClick={() => reset("")} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
