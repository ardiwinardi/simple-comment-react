import Link from "next/link";
import { useCommentItemContext } from ".";
import CommentAction from "./CommentAction";

export const CommentHeader = () => {
  const {
    comment: { user },
  } = useCommentItemContext();

  return (
    <header>
      <div className="flex justify-between items-center">
        <Link href={`/users/${user.id}`}>
          <h3 className="font-bold text-sm text-gray-800">{user.name}</h3>
        </Link>

        <CommentAction />
      </div>
      <h4 className="text-gray-500 text-xs">{user.title}</h4>
    </header>
  );
};
