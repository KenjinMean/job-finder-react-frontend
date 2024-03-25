import { useQuery } from "@tanstack/react-query";
import { apiFetchUser } from "../services/api/apiUser";
import { useUserStore } from "../services/state/UserStore";

/* ----------------------------------------------------------- */
export const useApiUserFetch = () => {
  const { user, setUser } = useUserStore();

  return useQuery({
    queryKey: ["fetchUser"],
    queryFn: async () => {
      const response = await apiFetchUser(user.id);
      console.log(response);
      return response;
    },
    select: (data) => data?.data,
    cacheTime: null,
  });
};
