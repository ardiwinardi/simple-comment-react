import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

type Props = {
  children: React.ReactNode;
};

export default function UserLayout({ children }: Props) {
  return (
    <div className="px-2 md:px-0 md:w-5/12 mx-auto my-10 space-y-5">
      <Link href={"/"}>
        <HiArrowLeft />
      </Link>
      {children}
    </div>
  );
}
