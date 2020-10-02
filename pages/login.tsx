import { message } from "antd";
import React, { useEffect } from "react";
import LoginForm, { LoginDataProps } from "../components/Forms/LoginForm";
import { API_URL_BASE } from "../constants";
import { logout } from "../helpers/auth";
import NotAuthorizedLayout from "../layout/NotAuthorizedLayout";

const LoginPage = () => {
  const onFinish = (data: LoginDataProps) => {
    console.log(data);
    fetch(`${API_URL_BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          message.success("Вход успешно выполнен!");
          window.location.href = "/";
        } else {
          message.error("Невверный логин или пароль!");
        }
      })
      .catch((error) => message.error("Невверный логин или пароль!"));
  };

  useEffect(() => {
    logout();
  });

  return (
    <NotAuthorizedLayout>
      <h1>Войти</h1>
      <LoginForm onFinish={onFinish} />
    </NotAuthorizedLayout>
  );
};

export default LoginPage;
