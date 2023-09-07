'use client'

import Button from "@/shared/components/atoms/Button";

type Props = {
  handleLoadMore: () => void;
};
export default function CommentPagination({ handleLoadMore }: Props) {
  return (
    <div className="flex justify-center">
      <Button variant={"link"} size="xs" onClick={handleLoadMore}>
        Load more
      </Button>
    </div>
  );
}
