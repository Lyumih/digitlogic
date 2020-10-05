import { Menu } from "antd";
import Link from "next/link";
import React, { FC } from "react";

interface MenuItemProps {
  href: string;
  label: string;
}

const menuItems: Array<MenuItemProps> = [
  {
    href: "/",
    label: "Главная",
  },
  {
    href: "/mind_number",
    label: "Число Разума",
  },
  {
    href: "/matrix",
    label: "Матрица",
  },
  {
    href: "/logout",
    label: "Выйти",
  },
];
const AuthorizedMenu: FC = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      {menuItems.map((item) => {
        return (
          <Menu.Item key={item.href}>
            <Link href={item.href}>
              <a>{item.label}</a> 
            </Link>
          </Menu.Item>
        );
      })}
    </Menu> 
  );
};

export default AuthorizedMenu;
