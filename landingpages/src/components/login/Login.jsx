import React from "react";
import { Form, Input, Typography, Button, message, Spin } from "antd";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const login = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      message.success("Inicio de Sesión Completado");
    }, 2000);
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
          name={"tuUsername"}
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
          name={"tuContraseña"}
          rules={[
            {
              required: true,
              message: "Debes ingresar tu contraseña",
            },
          ]}
        >
          <Input placeholder="Ingresa tu Contraseña"></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Ingresar
        </Button>
        {isLoading && <Spin />}
      </Form>
    </div>
  );
};

export default Login;
