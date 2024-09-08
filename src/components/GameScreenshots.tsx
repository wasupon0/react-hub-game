import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

export default function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return <div>Loading...</div>;
  if (error) throw error;

  return (
    <SimpleGrid marginTop={4} columns={{ base: 1, md: 2 }} spacing={4}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} alt={file.id.toString()} />
      ))}
    </SimpleGrid>
  );
}
