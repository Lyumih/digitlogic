import React, { useEffect } from "react";
import RegistrationForm, {
  RegistrationDataProps,
} from "../components/Forms/RegistrationForm";
import { API_URL_BASE } from "../constants";
import NotAuthorizedLayout from "../layout/NotAuthorizedLayout";
import { message } from "antd";
import { error } from "console";
import { useRouter } from "next/dist/client/router";
import { logout } from "../helpers/auth";

const RegistrationPage = () => {
  const router = useRouter();
  const onFinish = (data: RegistrationDataProps) => {
    console.log(data);
    data.birthdate = data.birthdate.format("Y-M-D");
    fetch(`${API_URL_BASE}/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        first_name: data.firstName,
        last_name: data.lastName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === "CREATED") {
          message.success("Вы успешно зарегистрировались!");
          router.push("/login");
        } else {
          message.error("Пользователь уже существует");
        }
      })
      .catch((error) => {
        message.error("Регистрация не удалась!");
      });
  };

  useEffect(() => {
    logout();
  });

  return (
    <NotAuthorizedLayout>
      <h1>Регистрация</h1>
      <RegistrationForm onFinish={onFinish} />
    </NotAuthorizedLayout>
  );
};

export default RegistrationPage;
