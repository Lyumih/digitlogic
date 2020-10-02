import { Menu } from "antd";
import Link from "next/link";
import React, { FC } from "react";

const NotAuthorizedMenu: FC = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item>
        <Link href="/registration">
          <a>Зарегистрироваться</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/login">
          <a>Войти</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NotAuthorizedMenu;
