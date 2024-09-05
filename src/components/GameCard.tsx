import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game, Platform } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

export interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {game.parent_platforms.map(({ platform }: Platform) => (
          // <Text key={platform.id}>{platform.name}</Text>
          <></>
        ))}
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
}
