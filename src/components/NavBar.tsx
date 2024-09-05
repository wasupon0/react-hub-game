import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "/public/logo.svg";

export default function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text>NavBar</Text>
    </HStack>
  );
}
