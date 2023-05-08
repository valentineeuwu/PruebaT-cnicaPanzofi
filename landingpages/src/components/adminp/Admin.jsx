import { Space, Table, Typography, Col, Row, Progress } from "antd";
import "./Admin.css";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Inicio de Sesión",
    dataIndex: "iniciodesesion",
    key: "iniciodesesion",
  },
  {
    title: "Tiempo",
    dataIndex: "tiempo",
    key: "tiempo",
  },
  {
    title: "Botón 1",
    key: "boton1",
    dataIndex: "boton1",
  },

  {
    title: "Botón 2",
    key: "boton2",
    dataIndex: "boton2",
  },
];
const data = [
  {
    key: "1",
    nombre: "John Brown",
    iniciodesesion: "fsd",
    tiempo: "New York No. 1 Lake Park",
    boton1: "efs",
    boton2: "wiwiw",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const App = () => (
  <div className="adminp">
    <Row>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
      <Col xs={40} sm={26} md={32} lg={28} xl={24}>
        <Typography.Title
          style={{ fontFamily: "Montserrat", fontSize: "22px" }}
        >
          Dashboard
        </Typography.Title>
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
    </Row>

    <div className="tablee">
      <Table
        columns={columns}
        dataSource={data}
        style={{ backgroundColor: "#5F7B86", boxShadow: "2px 2px 6px rgba(0,0,0,0.3)", borderRadius:16}}
        
      />
    <div className="progreso">
    <Row>
    <Col span={18} push={6}>
    <Progress percent={30}  strokeColor='#3F4756' trailColor="#99ACCF"/>
    <Progress percent={50} status="active" strokeColor='#3F4756' trailColor="#99ACCF" />
    <Progress percent={70} status="exception" strokeColor='#3F4756' trailColor="#99ACCF"/>
    <Progress percent={100} strokeColor='#3F4756' trailColor="#99ACCF"/>
    <Progress percent={50} showInfo={false} strokeColor='#3F4756' trailColor="#99ACCF" />
    </Col>
    <Col span={6} pull={18}>
    <Progress type="circle" percent={75}  strokeColor='#3F4756' trailColor="#99ACCF"/>
    </Col>
  </Row>
    
    </div>
    </div>
  </div>
);
export default App;
