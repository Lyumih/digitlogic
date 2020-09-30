import { Button, Form, Input } from "antd";
import React, { FC } from "react";

interface LoginFormProps {
  onFinish: (data: LoginDataProps) => void;
}

export interface LoginDataProps {
  email: string;
  password: string;
}

const LoginForm: FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Пожалуйста введите ваш Email!" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Пожалуйста введите ваш пароль!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Войти</Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
