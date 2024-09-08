import { useQuery } from "@tanstack/react-query";
import APIClient, { type FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platform: Platform;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    //initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
