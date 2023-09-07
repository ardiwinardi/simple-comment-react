import Button from "@/shared/components/atoms/Button";
import DotSeparator from "@/shared/components/atoms/DotSeparator";
import IconButton from "@/shared/components/atoms/IconButton";
import { BiLike } from "react-icons/bi";
import { useCommentItemContext } from ".";
export const CommentReaction = () => (
  <div className="flex items-center mt-1 gap-2 divide-x">
    <LikeReaction />
    <ReplyReaction />
  </div>
);

const Info = ({ text }: { text: string | number }) => (
  <span className="text-xs text-gray-500">{text}</span>
);

const LikeReaction = () => {
  const {
    comment: { reactionNumber },
  } = useCommentItemContext();
  return (
    <div className="flex items-center gap-2">
      <Button variant={"link"} size={"xs"} className="pr-1">
        Like
      </Button>
      {reactionNumber > 0 && (
        <>
          <DotSeparator />
          <div className="flex items-center gap-1">
            <IconButton className="bg-blue-500 h-4 w-4" size={"xs"} disabled>
              <BiLike className="-scale-x-100 text-white ml-0.5" size={12} />
            </IconButton>
            <Info text={reactionNumber} />
          </div>
        </>
      )}
    </div>
  );
};

const ReplyReaction = () => {
  const {
    comment: { replies },
  } = useCommentItemContext();

  return (
    <div className="flex items-center gap-2">
      <Button variant={"link"} size={"xs"} className="pr-0">
        Reply
      </Button>
      {replies.length > 0 && (
        <>
          <DotSeparator />
          <Info text={`${replies.length} Replies`} />
        </>
      )}
    </div>
  );
};
