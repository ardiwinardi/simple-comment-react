import Center from "@/shared/components/atoms/Center";
import Alert from "@/shared/components/molecules/Alert";

export default function NotFound() {
  return (
    <Center>
      <Alert
        title="Not Found"
        message="The page you are looking for is not available"
      />
    </Center>
  );
}
