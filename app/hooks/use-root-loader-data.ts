import { useMatches } from "react-router";
import { loader } from "~/root";

export const useRootLoaderData = () => {
  const [root] = useMatches();

  return root.data as Awaited<ReturnType<typeof loader>>;
};
