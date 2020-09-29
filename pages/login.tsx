import { Button } from "antd";
import React from "react";
import LoginForm, { LoginDataProps } from "../components/Forms/LoginForm";
import { API_URL_BASE } from "../constants";
import MainLayout from "../layout/MainLayout";

const LoginPage = () => {
  const onFinish = (data: LoginDataProps) => {
    console.log(data);

    fetch(`${API_URL_BASE}/users/login`, {
      method: "POST",
    });
  };

  return (
    <MainLayout>
      <h1>Войти</h1>
      <LoginForm onFinish={onFinish} />
    </MainLayout>
  );
};

export default LoginPage;
