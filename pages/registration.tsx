import { Button } from "antd";
import React, { useState } from "react";
import LoginForm, { LoginDataProps } from "../components/Forms/LoginForm";
import RegistrationForm, { RegistrationDataProps } from "../components/Forms/RegistrationForm";
import { API_URL_BASE } from "../constants";
import MainLayout from "../layout/MainLayout";

const RegistrationPage = () => {
  const [step, setStep] = useState([1]);
  const onFinish = (data: RegistrationDataProps) => {
    console.log(data);
    fetch(`${API_URL_BASE}/users/registration`, {
      method: "POST",
    });
  };

  return (
    <MainLayout>
      <h1>Регистрация</h1>
      <RegistrationForm onFinish={onFinish} />
    </MainLayout>
  );
};

export default RegistrationPage;
