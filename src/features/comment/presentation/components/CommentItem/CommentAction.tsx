import Dropdown, {
    DropdownMenuItem,
} from "@/shared/components/atoms/Dropdown";
import { HiDotsHorizontal } from "react-icons/hi";

export default function CommentAction() {
  const menus: DropdownMenuItem[] = [{ label: "Edit", onClick: () => false }];
  return (
    <Dropdown menus={menus} classNames={{ items: "right-0" }}>
      <HiDotsHorizontal />
    </Dropdown>
  );
}
