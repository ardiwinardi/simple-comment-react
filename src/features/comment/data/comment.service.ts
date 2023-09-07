import { PropsWithMetaDTO } from "@/shared/dtos/props-with-meta.dto";
import api from "@/shared/services/api.service";
import { PropsWithMeta } from "@/shared/types/props-with-meta";
import { Comment } from "../domain/comment.entity";
import { CommentRepository } from "../domain/comment.repository";
import { AddCommentDTO } from "../dtos/add-comment.dto";
import { CommentDTO } from "../dtos/comment.dto";
import { commentFromDTO } from "./comment.mapper";
import { AddCommentRequest, GetCommentsRequest } from "./comment.request";

class CommentService implements CommentRepository {
  /**
   * Fetches all comment items from the API
   * @param {GetCommentsRequest} request - api request
   * @param {number} [request.limit=2] - default maximum number of items to retrieve
   * @param {number} [request.skip=0] - default item's index to retrieve
   * @returns {Promise<PropsWithMeta<{ data: Comment[] }>>} - returns comment items with meta data
   */
  async getAll({
    limit = 2,
    skip = 0,
    orderBy,
  }: GetCommentsRequest): Promise<PropsWithMeta<{ data: Comment[] }>> {
    const filters = [`limit=${limit}`, `skip=${skip}`, `orderBy=${orderBy}`];

    const queryString = `?${filters.join("&")}`;

    const response = await api.get<
      PropsWithMetaDTO<{
        comments: CommentDTO[];
      }>
    >(`/comments${queryString}`);
    const { comments, ...props } = response.data;
    return {
      data: comments.map((dto) => commentFromDTO(dto)),
      ...props,
    };
  }

  /**
   * Add a new comment to a post
   * @param {AddCommentRequest} request - api request
   * @param {string} request.body - body of comment
   * @param {string} request.postId - post that is commented
   * @param {string} request.userId - who create comment
   * @returns {Promise<Comment>} - returns a comment that was just created
   */
  async addComment(request: AddCommentRequest): Promise<Comment> {
    const payload: AddCommentDTO = {
      body: request.body,
      postId: request.postId,
      userId: request.userId,
    };
    const response = await api.post<CommentDTO>(`/comments/add`, payload);
    return commentFromDTO(response.data);
  }
}

const commentService = Object.freeze(new CommentService());
export default commentService;
