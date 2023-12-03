import React from "react";
import Iframe from "react-iframe";

const ColumnChart = (props) => {
  return (
    <Iframe
      styles={props.style}
      className={props.classN}
      src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=654cf9bb-bdef-4eef-80bc-4446d4a9e0c0&maxDataAge=180&theme=light&autoRefresh=true"
    />
  );
};

export default ColumnChart;
