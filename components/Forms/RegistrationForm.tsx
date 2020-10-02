import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import React, { FC } from "react";

interface RegistrationFormProps {
  onFinish: (data: RegistrationDataProps) => void;
}

export interface RegistrationDataProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  sex: "m" | "f";
  birthdate: any;
}

const RegistrationForm: FC<RegistrationFormProps> = ({ onFinish }) => {
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
        hasFeedback
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Повторите пароль"
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Пожалуйста подтвердите ваш пароль!",
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Пароли не совпадают!");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Имя"
        name="firstName"
        rules={[{ required: true, message: "Пожалуйста введите ваше имя!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Фамилия"
        name="lastName"
        rules={[
          { required: true, message: "Пожалуйста введите вашу фамилию!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="phone"
        rules={[{ required: true, message: "Пожалуйста введите ваш телефон!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="День рождения"
        name="birthdate"
        rules={[
          { required: true, message: "Пожалуйста введите вашу дату рождения!" },
        ]}
      >
        <DatePicker format="Y-M-D" />
      </Form.Item>
      <Form.Item
        label="Пол"
        name="sex"
        rules={[{ required: true, message: "Пожалуйста выберите ваш пол!" }]}
      >
        <Select>
          <Select.Option value="m">Мужской</Select.Option>
          <Select.Option value="f">Женский</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Необходимо принять соглашение!"),
          },
        ]}
      >
        <Checkbox>
          Я прочитал <a href="#">соглашение</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Войти</Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
