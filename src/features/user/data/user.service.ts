import api from "@/shared/services/api.service";
import { User } from "../domain/user.entity";
import { UserRepository } from "../domain/user.repository";
import { UserDTO } from "../dtos/user.dto";
import { userFromDTO } from "./user.mapper";

class UserService implements UserRepository {
  async getById(id: string): Promise<User> {
    const response = await api.get<UserDTO>(`/user/${id}`);
    const dto = response.data;

    return userFromDTO(dto);
  }
}

const userService = Object.freeze(new UserService());
export default userService;
