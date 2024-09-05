import useData from "./useData";
import type { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platform: Platform;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
}

const useGames = (selectedGenres: Genre | null) =>
  useData<Game[]>("/games", { params: { genres: selectedGenres?.id } }, [
    selectedGenres?.id,
  ]);
export default useGames;
