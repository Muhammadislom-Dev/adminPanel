import React from "react";
import BarChart from "../../components/Chart/BarChart/BarChart";
import LineChart from "../../components/Chart/LineChart/LineChart";
import PieChart from "../../components/Chart/PieChart/PieChart";
import Progress from "../../components/Chart/Progress/Progress";
import './Analitica.css'

function Analitica() {
  return (
    <div className="analitica">
      <div className="chart">
        <BarChart />
        <PieChart />
      </div>
      <div className="main-progress">
        <Progress />
        <LineChart />
      </div>
    </div>
  );
}

export default Analitica;
