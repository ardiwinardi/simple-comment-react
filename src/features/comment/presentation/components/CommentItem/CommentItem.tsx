import Avatar from "@/shared/components/atoms/Avatar";

import { Comment } from "@/features/comment/domain/comment.entity";
import { createContext, useContext } from "react";
import CommentCard from "./CommentCard";
import { CommentReaction } from "./CommentReaction";

export type CommentItemType = {
  comment: Comment;
};

export const CommentItemContext = createContext<CommentItemType | null>(null);

export function CommentItem({ comment }: CommentItemType) {
  return (
    <CommentItemContext.Provider value={{ comment }}>
      <div className="flex gap-2">
        <Avatar size={"md"} src={comment.user.avatar} />
        <div className="flex flex-col flex-1">
          <CommentCard />
          <CommentReaction />
        </div>
      </div>
    </CommentItemContext.Provider>
  );
}

export const useCommentItemContext = (): CommentItemType => {
  const context = useContext(CommentItemContext);
  if (context === null) {
    throw new Error("CommentItemProvider was not found.");
  }

  return context;
};
