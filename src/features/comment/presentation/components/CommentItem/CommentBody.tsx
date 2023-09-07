import { useCommentItemContext } from ".";

export default function CommentBody() {
  const {
    comment: { message },
  } = useCommentItemContext();
  return <article className="text-sm">{message}</article>;
}
