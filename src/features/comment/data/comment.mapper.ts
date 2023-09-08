import { userFromDTO } from "@/features/user/data/user.mapper";
import { Comment } from "../domain/comment.entity";
import { CommentDTO } from "../dtos/comment.dto";

export const commentFromDTO = (dto: CommentDTO): Comment => {
  return {
    id: `${dto.id}`,
    user: dto.user
      ? userFromDTO(dto.user)
      : {
          id: "",
          name: "",
          title: "",
          avatar: "",
        },
    message: `${dto.body}`,
    reactionNumber: dto.id || 1 < 2 ? 2 : 0,
    replies: [],
  };
};
