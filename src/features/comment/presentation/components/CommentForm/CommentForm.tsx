"use client";

import Button from "@/shared/components/atoms/Button";
import TextInput from "@/shared/components/atoms/TextInput";
import { classNames } from "@/shared/utils/classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClassValue } from "clsx";
import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { useAddCommentMutation } from "../../controllers";

type Props = {
  className?: ClassValue;
};

const commentFormSchema = yup.object().shape({
  message: yup.string().required(),
});

type CommentFormData = yup.InferType<typeof commentFormSchema>;

export function CommentForm({ className }: Props) {
  const { register, handleSubmit, watch, reset } = useForm<CommentFormData>({
    resolver: yupResolver(commentFormSchema),
  });

  const [showButton, setShowButton] = useState(false);
  const debouncedShowButton = debounce(setShowButton, 300);
  const value = watch("message") ?? "";
  const isButtonDisabled = value.replace(/\s/g, "").length === 0;

  const addCommentMutation = useAddCommentMutation();

  useEffect(() => {
    debouncedShowButton(value.length > 0);
  }, [value]);

  const onSubmit = (data: CommentFormData) => {
    addCommentMutation.mutate({
      body: data.message,
      postId: "1",
      userId: "1",
    });
  };

  useEffect(() => {
    if (addCommentMutation.isSuccess) {
      reset({ message: "" });
    }
  }, [addCommentMutation.isSuccess, reset]);

  return (
    <div className={classNames("flex flex-col space-y-2", className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          placeholder="Write your comment here"
          autoComplete="off"
          {...register("message")}
        />
        {showButton && (
          <div className="mt-1">
            <Button disabled={isButtonDisabled || addCommentMutation.isLoading}>
              Post
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
