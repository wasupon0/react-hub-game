import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
  platform: Platform;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    //initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
