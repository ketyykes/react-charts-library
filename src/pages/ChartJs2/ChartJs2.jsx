import { useState } from "react";
import { chart } from "./chartjs2.module.scss";
import BarChart from "./components/BarChart.jsx";
import LineChart from "./components/LineChart.jsx";
import PieChart from "./components/PieChart.jsx";
import { UserData } from "../../Data.js";

function ChartJs2() {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });


  return (
    <div>
      <div className={chart}>
        <BarChart chartData={userData} />
      </div>
      <div className={chart}>
        <LineChart chartData={userData} />
      </div>
      <div className={chart}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default ChartJs2;
