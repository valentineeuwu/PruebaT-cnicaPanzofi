import React, { useEffect } from "react";
import { Form, Input, Typography, Button, message, Spin } from "antd";
import "./Login.css";
import { useState } from "react";
import loginService from "../../services/loginService";
import userService from "../../services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUserState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
      if (user.is_admin) navigate("/adminpage");
      else navigate("/userpage");
      return;
    }
    const token = localStorage.getItem("access");
    if (token) localStorage.clear();
  }, [user]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const login = async (values) => {
    setIsLoading(true);
    try {
      const isLogged = await loginService().login(values);
      if (!isLogged) {
        setIsLoading(false);
        message.error("Usuario o contraseña incorrecto");
        return;
      }
      await loadUserInfo();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      message.error("Ocurrió un error inesperado, intenta mas tarde");
    }
  };

  const loadUserInfo = async () => {
    setUserState((await userService().getUser()).user);
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
