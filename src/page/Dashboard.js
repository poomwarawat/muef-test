import React, { useEffect, useState } from "react";
import { Container, Button, Col, Row } from "reactstrap";
import Header from "../component/Home/Header";
import { Line, Doughnut, Bubble } from "react-chartjs-2";
import API from "../API/API";
import SpinComp from "../component/SpinComp";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [cpuArr, setCpuArr] = useState([]);
  const [cpuData, setCpuData] = useState([]);
  const [cpuData2, setCpuData2] = useState([]);
  var data1 = {
    labels: ["CPU ที่ใช้งาน", "CPU ที่ไม่ใช้งาน"],
    datasets: [
      {
        data: cpuArr,
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  var data2 = {
    labels: ["Memory ที่ใช้งาน", "Memory ที่ไม่ใช้งาน"],
    datasets: [
      {
        data: cpuData,
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  var data3 = {
    labels: ["Ram ที่ใช้งาน", "Ram ที่ไม่ใช้งาน"],
    datasets: [
      {
        data: cpuData2,
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };
  var BubbleData = {
    labels: ["January"],
    datasets: [
      {
        label: "My First dataset",
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
        data: [{ x: 10, y: 20, r: 15 }],
      },
    ],
  };
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
    async function FecthCpu() {
      const getCPU = await API.get("/dashboard/get-cpu-usage");
      const resultCPU = await getCPU.data;
      setCpuArr([resultCPU, 100 - resultCPU]);
    }
    async function FechCpuData() {
      const getCPU = await API.get("/dashboard/get-cpu-speed");
      const resultCPU = await getCPU.data;
      setCpuData([parseInt(resultCPU.cpu1), 100 - parseInt(resultCPU.cpu1)]);
      setCpuData2([parseInt(resultCPU.cpu2), 100 - parseInt(resultCPU.cpu2)]);
    }
    FechCpuData();
    FecthCpu();
    setInterval(() => {
      FechCpuData();
      FecthCpu();
    }, 1000);
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
            {cpuArr.length > 0 && (
              <Row className="mt-4">
                <Col md={4}>
                  <Doughnut data={data1} />
                </Col>
                <Col md={4}>
                  <Doughnut data={data2} />
                </Col>
                <Col md={4}>
                  <Doughnut data={data3} />
                </Col>
              </Row>
            )}
            <Row className="mt-4">
              <Bubble data={BubbleData} />
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
