import React from "react";
import { Form, Input, Typography, Button, message, Spin } from "antd";
import "./Login.css";
import { useState } from "react";
import { HttpStatusCode } from "axios";
import loginService from "../../services/loginService";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const login = async (values) => {
    setIsLoading(true);
    try {
      console.log(await loginService().login(values));
      localStorage.setItem("access", data.access_token);
      localStorage.setItem("refresh", data.refresh_tokenb);
      window.location.href = "/userpage";
    } catch (error) {
      console.log(error);
      if (error.response.status === HttpStatusCode.Unauthorized)
        message.error("Usuario o contrasena incorrecto");
      else message.error("Ocurrio un error innesperado, intenta mas tarde");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Form
        className="loginForm"
        name="basic"
        onFinish={login}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
          fontFamily: "Montserrat",
          fontSize: "32px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Typography.Title
          style={{ fontFamily: "Montserrat", fontSize: "32px" }}
        >
          Ingresa tus datos
        </Typography.Title>
        <Form.Item
          label="Username"
          name={"username"}
          rules={[
            {
              required: true,
              message: "Debes ingresar tu usuario",
            },
          ]}
        >
          <Input placeholder="Ingresa tu usuario"></Input>
        </Form.Item>
        <Form.Item
          label="Contraseña"
          name={"password"}
          rules={[
            {
              required: true,
              message: "Debes ingresar tu contraseña",
            },
          ]}
        >
          <Input type="password" placeholder="Ingresa tu Contraseña"></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Ingresar
        </Button>
      </Form>
    </div>
  );
};

export default Login;
