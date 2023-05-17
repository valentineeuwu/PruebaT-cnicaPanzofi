import { Image, Typography, Col, Row, Button, Space } from "antd";
import React from "react";
import "./DefaultUser.css";
const { Title, Paragraph } = Typography;
import { useSelector } from "react-redux";
import UserService from "../../services/userService";
import { useNavigate } from "react-router-dom";
const userService = UserService();

const DefaultUser = () => {
  const navigate = useNavigate();
  const handleButton1Click = async () => {
    const resp = await userService.handleButtonClick("button1");
    if (!resp) navigate("../login");
  };
  const handleButton2Click = async () => {
    const resp = await userService.handleButtonClick("button2");
    if (!resp) navigate("../login");
  };
  const user = useSelector((state) => state);
  return (
    <div>
      <Row>
        <Col span={18} push={6}>
          <Title className="titulo"> {user.title}</Title>
          <Paragraph className="descripcion">{user.description}</Paragraph>
        </Col>
        <Col span={6} pull={18}>
          <Image
            className="logo"
            width={400}
            preview={false}
            src={user.image}
          />
        </Col>
      </Row>

      <Row justify="space-evenly">
        <Col span={4}>
          <Space wrap className="botones">
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.2)" }}
              onClick={handleButton1Click}
            >
              Botón 1
            </Button>
          </Space>
        </Col>
        <Col span={4}>
          <Space wrap className="boton2">
            <Button
              type="primary"
              size="large"
              shape="round"
              style={{ boxShadow: "2px 2px 6px rgba(0,0,0,0.2)" }}
              onClick={handleButton2Click}
            >
              Botón 2
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default DefaultUser;
