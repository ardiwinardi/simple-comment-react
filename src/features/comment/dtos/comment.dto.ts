import { UserDTO } from "@/features/user/dtos/user.dto";

export interface CommentDTO {
  id?: number;
  body?: string;
  postId?: number;
  user?: UserDTO;
}
