import { Table } from "antd";
import { columns } from "../utils/RestaurantTableOptions";

function RestaurantResults(props) {
  if (props.locations === null) {
    return (
      <div
        style={{
          marginTop: "2vh",
          width: "100%",
          height: "95%",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Enter an address to begin
      </div>
    );
  }

  return (
    <div style={{ marginTop: "2vh" }}>
      <Table
        dataSource={props.locations}
        columns={columns}
        pagination={{ pageSize: 20, position: ["none", "none"] }}
        scroll={{ y: "35vh" }}
      />
    </div>
  );
}

export default RestaurantResults;
