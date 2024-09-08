import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    //initialData: { count: genres.length, results: genres }
  });
export default useGenres;
