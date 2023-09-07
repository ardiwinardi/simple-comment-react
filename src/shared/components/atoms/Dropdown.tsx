'use client'

import { classNames as cn } from "@/shared/utils/classnames";
import { Menu, Transition } from "@headlessui/react";
import { ClassValue } from "clsx";
import { Fragment, PropsWithChildren } from "react";

export type DropdownMenuItem = {
  label: string;
  onClick: VoidFunction;
};
type Props = PropsWithChildren & {
  menus: DropdownMenuItem[];
  classNames?: {
    items?: ClassValue;
    item?: ClassValue;
  };
};
export default function Dropdown({ children, menus, classNames }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>{children}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={cn(
            "absolute mt-0 min-w-[100px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10",
            classNames?.items
          )}
        >
          <div className="py-1">
            {menus.map((menu) => (
              <Menu.Item key={menu.label}>
                <button
                  onClick={menu.onClick}
                  className={cn(
                    `group flex w-full items-center px-3 py-1 text-sm hover:bg-gray-100 ${classNames?.item}`
                  )}
                >
                  {menu.label}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
