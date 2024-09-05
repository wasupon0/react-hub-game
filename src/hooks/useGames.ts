import useData from "./useData";

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

const useGames = () => useData<Game[]>("/games");
export default useGames;
