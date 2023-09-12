import { GetCommentsRequest } from "@/features/comment/data/comment.request";
import commentService from "@/features/comment/data/comment.service";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const limit = searchParams.get("limit");
  const skip = searchParams.get("skip");

  const params: GetCommentsRequest = {
    limit: limit ? parseInt(limit, 10) : undefined,
    orderBy: searchParams.get("orderBy") ?? undefined,
    skip: skip ? parseInt(skip, 10) : undefined,
  };
  const response = await commentService.getAll(params);

  return NextResponse.json(response);
}
