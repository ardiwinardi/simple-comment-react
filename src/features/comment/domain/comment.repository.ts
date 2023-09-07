import { PropsWithMeta } from "@/shared/types/props-with-meta";
import { AddCommentRequest, GetCommentsRequest } from "../data/comment.request";
import { Comment } from "./comment.entity";

export interface CommentRepository {
  getAll(
    request: GetCommentsRequest
  ): Promise<PropsWithMeta<{ data: Comment[] }>>;

  addComment(request: AddCommentRequest): Promise<Comment>;
}
