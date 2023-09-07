"use client";

import Button from "@/shared/components/atoms/Button";
import TextInput from "@/shared/components/atoms/TextInput";
import { classNames } from "@/shared/utils/classnames";
import { ClassValue } from "clsx";
import debounce from "lodash.debounce";
import { useCallback, useState } from "react";

type Props = {
  className?: ClassValue;
};
export function CommentForm({ className }: Props) {
  const [value, setValue] = useState("");
  const [showButton, setShowButton] = useState(false);
  const debouncedShowButton = useCallback(debounce(setShowButton, 300), []);

  return (
    <div className={classNames("flex flex-col space-y-2", className)}>
      <TextInput
        value={value}
        placeholder="Write your comment here"
        onChange={(e) => {
          setValue(e.target.value);
          debouncedShowButton(e.target.value.length > 0);
        }}
      />
      {showButton && (
        <div>
          <Button disabled={value.replace(/\s/g, "").length === 0}>Post</Button>
        </div>
      )}
    </div>
  );
}
