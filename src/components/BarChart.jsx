import React from "react";
import Iframe from "react-iframe";

const BarChart = (props) => {
  return (
    <Iframe
      styles={props.style}
      className={props.classN}
      src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=653c471c-a3a5-4252-8de9-882a43d093b0&maxDataAge=180&theme=light&autoRefresh=true"
    />
  );
};

export default BarChart;
