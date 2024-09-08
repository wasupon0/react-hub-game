import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export default function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  const first = data?.results[0];

  if (isLoading) return <div>Loading...</div>;
  if (error) throw error;

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : (
    <div>No trailers found</div>
  );
}
