import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import logo from "/public/logo.svg";

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
}
