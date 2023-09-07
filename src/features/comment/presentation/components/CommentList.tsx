"use client";

import Spinner from "@/shared/components/atoms/Spinner";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Comment } from "../../domain/comment.entity";
import { useCommentListContext } from "../contexts/CommentListContext";
import { useGetCommentsQuery } from "../controllers";
import { CommentItem } from "./CommentItem";
import CommentItemSkeleton from "./CommentItemSkeleton";
const CommentPagination = dynamic(() => import("./CommentPagination"));

export default function CommentList() {
  const [commentList, setCommentList] = useState<Comment[]>([]);

  const { orderBy, limit, skip, setSkip } = useCommentListContext();
  const getCommentsQuery = useGetCommentsQuery({ orderBy, limit, skip });

  /**
   * show comments skeleton on initial loading
   * append new comments to commentList when user clicks load more button
   * show spinner on load more loading
   */

  useEffect(() => {
    if (skip === 0) {
      setCommentList([]);
    }
    getCommentsQuery.refetch();
  }, [orderBy, skip]);

  useEffect(() => {
    if (getCommentsQuery.data) {
      setCommentList([...commentList, ...(getCommentsQuery.data?.data ?? [])]);
    }
  }, [getCommentsQuery.dataUpdatedAt]);

  const handleLoadMore = () => {
    setSkip(skip + limit);
  };

  return (
    <>
      {getCommentsQuery.isLoading && <CommentItemSkeleton />}

      {commentList.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <CommentItem comment={comment} />
            {comment.replies.length > 0 && (
              <div className="ml-[2.8rem]">
                {comment.replies.map((reply, index) => (
                  <CommentItem key={`${reply.id}${index}`} comment={reply} />
                ))}
              </div>
            )}
          </React.Fragment>
        );
      })}

      {commentList.length > 0 && (
        <>
          {getCommentsQuery.isFetching ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <CommentPagination handleLoadMore={handleLoadMore} />
          )}
        </>
      )}
    </>
  );
}
