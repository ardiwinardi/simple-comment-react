import userService from "@/features/user/data/user.service";
import UserCard from "@/features/user/presentation/components/UserCard";

type UserPageProps = {
  params: {
    userId: string;
  };
};
export default async function UserPage({ params }: UserPageProps) {
  const user = await userService.getById(params.userId);

  return <UserCard user={user} />;
}
