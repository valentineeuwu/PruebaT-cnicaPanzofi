import { Space, Table, Tag } from "antd";
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
    title: "botón1",
    key: "boton1",
    dataIndex: "boton1",
  },

  {
    title: "Botón2",
    key: "boton2",
    dataIndex: "boton2",
  },
];
const data = [
  {
    key: "1",
    nombre: "John Brown",
    iniciodesesion: Date,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
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
const App = () => <Table columns={columns} dataSource={data} />;
export default App;
