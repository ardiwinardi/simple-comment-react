"use client";

import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import CommentFilter from "./components/CommentFilter";
import { CommentForm } from "./components/CommentForm";
import CommentItemSkeleton from "./components/CommentItemSkeleton";
import { CommentListProvider } from "./contexts/CommentListContext";

const CommentList = lazy(() => import("./components/CommentList"));
const queryClient = new QueryClient();

export default function CommentPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-2 md:px-0 md:w-5/12 mx-auto my-10 space-y-5">
        <CommentForm />
        <CommentListProvider>
          <CommentFilter />
          <ErrorBoundary
            onError={(e) => console.log(e)}
            fallback={<div>Something went wrong</div>}
          >
            <Suspense fallback={<CommentItemSkeleton />}>
              <CommentList />
            </Suspense>
          </ErrorBoundary>
        </CommentListProvider>
      </div>
    </QueryClientProvider>
  );
}
