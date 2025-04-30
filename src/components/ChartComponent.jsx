import React from "react";
import { Chart } from "react-google-charts";

const categoryColors = {
  Electronics: "#3366cc",
  Clothing: "#dc3912",
  Food: "#ff9900",
  Books: "#109618",
};

const ChartComponent = ({ chartHeaders, salesData, visibleCategories }) => {
  return (
    <div className="chart-container">
      <Chart
        width="100%"
        height="400px"
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={[chartHeaders, ...salesData]}
        options={{
          hAxis: { title: "Date" },
          vAxis: { title: "Sales" },
          colors: visibleCategories.map((cat) => categoryColors[cat]),
          legend: { position: "bottom" },
        }}
      />
    </div>
  );
};

export default ChartComponent;
