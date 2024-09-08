import type { Genre } from "./Genre";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
  metacritic: number;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
}
