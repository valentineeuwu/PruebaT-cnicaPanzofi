import { Image, Typography, Col, Row, Button, Space } from "antd";
import React from "react";
import "./DefaultUser.css";

const { Title, Paragraph } = Typography;

const DefaultUser = () => (
  <div>
    <Row>
      <Col span={18} push={6}>
        <Title className="titulo">Traer Titulo Back</Title>
        <Paragraph className="descripcion">Aqui va la descripcion</Paragraph>
      </Col>
      <Col span={6} pull={18}>
        <Image
          className="logo"
          width={400}
          preview={false}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
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
          >
            Botón 2
          </Button>
        </Space>
      </Col>
    </Row>
  </div>
);

export default DefaultUser;
