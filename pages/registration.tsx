import { Button } from "antd";
import React, { useState } from "react";
import LoginForm, { LoginDataProps } from "../components/Forms/LoginForm";
import { API_URL_BASE } from "../constants";
import MainLayout from "../layout/MainLayout";

const RegistrationPage = () => {

  const [step, setStep] = useState([1])
  const onFinish = (data: LoginDataProps) => {
    console.log(data);
    fetch(`${API_URL_BASE}/users/registration`, {
      method: "POST",
    });
  };

  return (
    <MainLayout>
      <h1>Регистрация</h1>
      <LoginForm onFinish={onFinish} />
    </MainLayout>
  );
};

export default RegistrationPage;
