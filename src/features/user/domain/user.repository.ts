import { User } from "./user.entity";

export interface UserRepository {
  getById(id: string): Promise<User>;
}
