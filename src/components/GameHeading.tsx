import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `
  ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""}`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
}
