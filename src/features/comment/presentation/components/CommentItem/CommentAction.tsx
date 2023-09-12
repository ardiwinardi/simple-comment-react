"use client";

import Dropdown, { DropdownMenuItem } from "@/shared/components/atoms/Dropdown";
import { useRouter } from "next/navigation";
import { HiDotsHorizontal } from "react-icons/hi";

export default function CommentAction() {
  const router = useRouter();

  const menus: DropdownMenuItem[] = [
    { label: "Edit", onClick: () => router.push("/login") },
  ];
  return (
    <Dropdown menus={menus} classNames={{ items: "right-0" }}>
      <HiDotsHorizontal />
    </Dropdown>
  );
}
