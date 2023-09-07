export interface GetCommentsRequest {
  orderBy?: string;
  limit?: number;
  skip?: number;
}

export interface AddCommentRequest {
  body: string;
  postId: string;
  userId: string;
}
