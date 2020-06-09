import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Header from "../component/Home/Header";
import { Line, Bar, Pie } from "react-chartjs-2";
import API from "../API/API";
import SpinComp from "../component/SpinComp";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  var data = {
    labels: [],
    datasets: [
      {
        label: "สถิติการสมัครเว็ปไซต์",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  };
  const [DATA, setData] = useState(data);
  var [numberData, setNumberData] = useState(0);

  useEffect(() => {
    async function FetchData() {
      const getRegisterCount = await API.get("/dashboard/get-register");
      const result = await getRegisterCount.data;
      const lenData = result.length;
      for (let index = 0; index < result.length; index++) {
        const date = result[index][0];
        const count = result[index][1];
        data.labels.push(date);
        data.datasets[0]["data"].push(count);
        setNumberData((numberData += count));
        if (lenData === index + 1) {
          setLoading(true);
        }
      }
    }
    FetchData();
  }, []);
  return (
    <div className="dashboard-page">
      <Header />
      <div className="white-bg">
        <div className="dashboard-component">
          <Container>
            <h1>Dashboard</h1>
            <Row>
              <Col md={12}>
                <h3>อัตราการสมัครสมาชิก</h3>
                {console.log(DATA)}
                {loading === true && DATA.labels.length > 0 ? (
                  <Line data={DATA} />
                ) : (
                  <SpinComp />
                )}
              </Col>
              <Col className="mt-4">
                <h3>
                  จำนวนผู้สมัครทั้งหมด :{" "}
                  {loading === true && DATA.labels.length > 0 && (
                    <span>{numberData} คน</span>
                  )}
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
