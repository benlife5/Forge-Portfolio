import { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import RestaurantInput from "./RestaurantInput.js";
import RestaurantResults from "./RestaurantResults.js";
import LocationsMap from "./LocationsMap.js";

function RestaurantApp() {
  const [results, setResults] = useState(null);

  return (
    <div style={{ height: "90vh", padding: "1%" }}>
      <Row style={{ height: "50%" }}>
        <Col span={12}>
          <RestaurantInput setResults={setResults} />
        </Col>
        <Col span={12}>
          <div style={{ paddingLeft: ".5vw", width: "100%", height: "100%" }}>
            <LocationsMap locations={results} />
          </div>
        </Col>
      </Row>
      <Row style={{ height: "50%" }}>
        <Col span={24}>
          <RestaurantResults locations={results} />
        </Col>
      </Row>
    </div>
  );
}

export default RestaurantApp;
