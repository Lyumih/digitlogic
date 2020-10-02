import { Menu } from "antd";
import Link from "next/link";
import React, { FC } from "react";

const AuthorizedMenu: FC = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <Link href="/">
          <a>Главная</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/matrix">
          <a>Матрица</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/logout">
          <a>Выйти</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AuthorizedMenu;
