"use client";

import Spinner from "@/shared/components/atoms/Spinner";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import { useCommentListContext } from "../contexts/CommentListContext";
import { useGetCommentsQuery } from "../controllers";
import { CommentItem } from "./CommentItem";
import CommentItemSkeleton from "./CommentItemSkeleton";

const CommentPagination = dynamic(() => import("./CommentPagination"));

/**
 * show comments skeleton on initial loading
 * append new comments to commentList when user clicks load more button
 * show spinner when processing load more action
 */

export default function CommentList() {
  const { orderBy, limit, skip } = useCommentListContext();
  const getCommentsQuery = useGetCommentsQuery({ orderBy, limit, skip });

  /**
   * if total > skip value, show load more button
   */
  const hasLoadMore = useMemo((): boolean => {
    const pages = getCommentsQuery.data?.pages ?? [];
    if (pages.length > 0) {
      return pages[pages.length - 1].total > pages[pages.length - 1].skip;
    }
    return false;
  }, [getCommentsQuery.dataUpdatedAt]);

  return (
    <>
      {getCommentsQuery.isLoading && <CommentItemSkeleton />}
      {getCommentsQuery.data?.pages.map(page => (
        <React.Fragment key={page.skip}>
          {page.data.map(comment => (
            <React.Fragment key={comment.id}>
              <CommentItem comment={comment} />
              {comment.replies.length > 0 && (
                <div className="ml-[2.8rem]">
                  {comment.replies.map(reply => (
                    <CommentItem key={reply.id} comment={reply} />
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}

      {hasLoadMore && getCommentsQuery.isFetching ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : null}

      {hasLoadMore && !getCommentsQuery.isFetching ? (
        <CommentPagination handleLoadMore={getCommentsQuery.fetchNextPage} />
      ) : null}
    </>
  );
}
