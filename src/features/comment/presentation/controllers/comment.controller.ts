import { useMutation, useQuery, useQueryClient } from "react-query";
import { GetCommentsRequest } from "../../data/comment.request";
import commentService from "../../data/comment.service";

export const useGetCommentsQuery = (request: GetCommentsRequest) => {
  const queryClient = useQueryClient();

  const comments = useQuery({
    enabled: false,
    queryKey: ["comments"],
    queryFn: () => commentService.getAll(request),
    onError: (error) => console.log(error),
  });

  return comments;
};

export const useAddCommentMutation = () => {
  const queryClient = useQueryClient();

  const comment = useMutation({
    mutationFn: commentService.addComment,
    onError: (error) => console.log(error),
    onSuccess: (result) => {
      queryClient.setQueryData(
        ["comments"],
        (old: any) => ({
          data: [result],
          append: true,
        }),
        {
          updatedAt: new Date().getTime(),
        }
      );
    },
  });

  return comment;
};
