import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((genre) => genre.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );

  const heading = `
  ${platform?.name || ""} ${genre?.name || ""}`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
}
