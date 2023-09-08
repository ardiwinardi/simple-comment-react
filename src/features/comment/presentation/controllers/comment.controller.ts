import { DataWithMeta } from "@/shared/types/data-with-meta";
import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "react-query";
import { GetCommentsRequest } from "../../data/comment.request";
import commentService from "../../data/comment.service";
import { Comment } from "../../domain/comment.entity";

export const useGetCommentsQuery = (request: GetCommentsRequest) => {
  const comments = useInfiniteQuery({
    queryKey: ["comments"],
    queryFn: ({ pageParam = 0 }) => {
      return commentService.getAll({ ...request, skip: pageParam });
    },
    onError: (error) => console.log(error),
    getNextPageParam: (lastPage) => lastPage.skip + lastPage.limit,
  });
  return comments;
};

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  const comment = useMutation({
    mutationFn: commentService.addComment,
    onError: (error) => console.log(error),
    onSuccess: (result) => {
      queryClient.setQueryData<InfiniteData<DataWithMeta<Comment[]>>>(
        ["comments"],
        (oldData: any) => {
          if (oldData) {
            const newData = {
              ...(oldData as InfiniteData<DataWithMeta<Comment[]>>),
            };
            newData.pages[0].data = [result, ...newData.pages[0].data];
            return newData;
          } else {
            return oldData;
          }
        },
        {
          updatedAt: new Date().getTime(),
        }
      );
    },
  });

  return comment;
};
