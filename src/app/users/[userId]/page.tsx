import userService from "@/features/user/data/user.service";
import Image from "next/image";
import { Suspense } from "react";
type UserPageProps = {
  params: {
    userId: string;
  };
};
export default async function UserPage({ params }: UserPageProps) {
  const user = await userService.getById(params.userId);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div>{user.name}</div>
        <Image src={user.avatar} height={100} width={100} alt={user.name} />
      </Suspense>
    </div>
  );
}
