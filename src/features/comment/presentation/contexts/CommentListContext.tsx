"use client";

import { PropsWithChildren, createContext, useContext, useState } from "react";

export type CommentListType = {
  orderBy: string;
  limit: number;
  skip: number;
  setOrderBy: (value: string) => void;
  setLimit: (value: number) => void;
  setSkip: (value: number) => void;
};

export const CommentListContext = createContext<CommentListType | null>(null);

export function CommentListProvider({ children }: PropsWithChildren) {
  const [orderBy, setOrderBy] = useState<CommentListType["orderBy"]>("newest");
  const [limit, setLimit] = useState<CommentListType["limit"]>(2);
  const [skip, setSkip] = useState<CommentListType["skip"]>(0);

  const handleOrderBy = (value: Parameters<typeof setOrderBy>[0]) => {
    setOrderBy(value);
    setSkip(0);
  };

  return (
    <CommentListContext.Provider
      value={{
        orderBy,
        limit,
        skip,
        setOrderBy: handleOrderBy,
        setLimit,
        setSkip,
      }}
    >
      {children}
    </CommentListContext.Provider>
  );
}

export const useCommentListContext = (): CommentListType => {
  const context = useContext(CommentListContext);
  if (context === null) {
    throw new Error("CommentListProvider was not found.");
  }

  return context;
};
