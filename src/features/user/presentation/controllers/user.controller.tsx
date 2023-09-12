import { useQuery } from "react-query";
import userService from "../../data/user.service";

export const useGetUserByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => userService.getById(id),
    onError: error => console.log(error),
  });
};
