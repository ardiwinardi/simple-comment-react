"use client";

import ErrorMessage, {
  ErrorMessageProps,
} from "@/shared/components/molecules/ErrorMessage";

export default function error(props: ErrorMessageProps) {
  return <ErrorMessage {...props} />;
}
