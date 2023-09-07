import { Comment } from "../domain/comment.entity";
import { CommentDTO } from "../dtos/comment.dto";

export const commentFromDTO = (dto: CommentDTO): Comment => {
  return {
    id: `${dto.id}`,
    user: {
      name: `${dto.user?.username}`,
      avatar: "https://placekitten.com/100/100",
      title: `Director of Gugle`,
    },
    message: `${dto.body}`,
    reactionNumber: dto.id || 1 < 2 ? 2 : 0,
    replies: [],
  };
};
