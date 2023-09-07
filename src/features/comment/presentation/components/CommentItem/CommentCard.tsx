import CommentBody from "./CommentBody";
import { CommentHeader } from "./CommentHeader";

export default function CommentCard() {
  return (
    <div className="bg-gray-100 p-3 pt-2 rounded-md rounded-tl-none space-y-2 w-full">
      <CommentHeader />
      <CommentBody />
    </div>
  );
}
