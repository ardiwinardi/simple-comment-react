"use client";

import Dropdown, { DropdownMenuItem } from "@/shared/components/atoms/Dropdown";
import { useContext } from "react";
import { HiChevronDown } from "react-icons/hi";
import { orderByOptions } from "../constants/order-by-options";
import {
  CommentListContext,
  CommentListType,
} from "../contexts/CommentListContext";

export default function CommentFilter() {
  const { orderBy, setOrderBy } = useContext(
    CommentListContext
  ) as CommentListType;

  const menus: DropdownMenuItem[] = orderByOptions.map(option => ({
    label: option.label,
    onClick: () => setOrderBy(option.value),
  }));

  const currentLabel = orderByOptions.find(option => option.value === orderBy)
    ?.label;

  return (
    <Dropdown menus={menus} classNames={{ items: "mt-2" }}>
      <div className="flex">
        <label
          className="text-xs font-bold text-gray-500 cursor-pointer"
          htmlFor="dropdown"
        >
          {currentLabel}
        </label>{" "}
        <HiChevronDown size={18} className="text-gray-500" id="dropdown" />
      </div>
    </Dropdown>
  );
}
