import { useQuery } from "react-query";
import userService from "../../data/user.service";

export const useGetUserByIdQuery = (id: string) => {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getById(id),
    onError: (error) => console.log(error),
  });

  return query;
};
