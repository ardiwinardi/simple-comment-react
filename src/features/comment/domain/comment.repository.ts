import { DataWithMeta } from "@/shared/types/data-with-meta";
import { AddCommentRequest, GetCommentsRequest } from "../data/comment.request";
import { Comment } from "./comment.entity";

export interface CommentRepository {
  getAll(request: GetCommentsRequest): Promise<DataWithMeta<Comment[]>>;
  addComment(request: AddCommentRequest): Promise<Comment>;
}
