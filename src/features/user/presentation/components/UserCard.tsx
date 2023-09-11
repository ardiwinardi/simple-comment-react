import Avatar from "@/shared/components/atoms/Avatar";
import Image from "next/image";
import { User } from "../../domain/user.entity";

type Props = {
  user: User;
};
export default function UserCard({ user }: Props) {
  return (
    <div className="flex flex-col w-full relative">
      <div className="bg-gray-200 h-32 w-full rounded-t-md overflow-hidden relative">
        <Image
          src={user.avatar}
          alt="user-picture"
          width={800}
          height={200}
          className="rounded-t-md object-contain absolute"
          title={user.name}
        />
      </div>

      <div className="-mt-8 mx-3">
        <Avatar src={user.avatar} size={"lg"} />
        <b>{user.name}</b>
        <p>{user.title}</p>
      </div>
    </div>
  );
}
