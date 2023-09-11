"use client";

import ClientProvider from "@/shared/components/providers/ClientProvider";
import Link from "next/link";
import { Suspense, lazy } from "react";
import CommentFilter from "./components/CommentFilter";
import { CommentForm } from "./components/CommentForm";
import CommentItemSkeleton from "./components/CommentItemSkeleton";
import { CommentListProvider } from "./contexts/CommentListContext";

const CommentList = lazy(() => import("./components/CommentList"));

export default function CommentPage() {
  return (
    <ClientProvider>
      <main className="px-2 md:px-0 md:w-5/12 mx-auto my-10 space-y-5">
        <Link href="/login">login</Link>
        <CommentForm />
        <CommentListProvider>
          <CommentFilter />
          <Suspense fallback={<CommentItemSkeleton />}>
            <CommentList />
          </Suspense>
        </CommentListProvider>
      </main>
    </ClientProvider>
  );
}
