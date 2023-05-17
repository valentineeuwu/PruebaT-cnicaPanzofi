import { Space, Table, Typography, Col, Row, Progress } from "antd";
import "./Admin.css";
import { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import { useNavigate } from "react-router-dom";
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

function formatMilliseconds(milliseconds) {
  var seconds = Math.floor(milliseconds / 1000);
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;

  // Agrega ceros iniciales si es necesario
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

const App = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState([]);
  const [dataLoaded, setLoaded] = useState(false);
  const getSessions = async () => {
    const data = await adminService().getSession();
    setSessions(
      data?.sessions.map((session) => ({
        nombre: session.user.username,
        iniciodesesion: session.loggedAt,
        tiempo: formatMilliseconds(
          new Date(session.loggedOut).getTime() -
            +new Date(session.loggedAt).getTime()
        ),
        boton1: session.button1,
        boton2: session.button2,
      }))
    );
    if (!data) navigate("../login");
  };
  useEffect(() => {
    if (!dataLoaded) {
      getSessions();
      setLoaded(true);
    }
  });
  return (
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
          dataSource={sessions}
          style={{
            backgroundColor: "#5F7B86",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.3)",
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  );
};
export default App;
