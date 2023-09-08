import { User } from "../domain/user.entity";
import { UserDTO } from "../dtos/user.dto";

export const userFromDTO = (dto: UserDTO): User => {
  return {
    id: `${dto.id}`,
    name: `${dto.username}`,
    avatar: "https://placekitten.com/100/100",
    title: `Director of Gugle`,
  };
};
