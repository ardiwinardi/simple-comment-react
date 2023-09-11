import Button from "../atoms/Button";
import Center from "../atoms/Center";
import Alert from "./Alert";

export type ErrorMessageProps = {
  error: Error;
  reset: () => void;
};
export default function ErrorMessage({ error, reset }: ErrorMessageProps) {
  return (
    <Center>
      <Alert
        title="Error"
        message={error.message}
        rightSection={<Button onClick={reset}>reset</Button>}
      />
    </Center>
  );
}
