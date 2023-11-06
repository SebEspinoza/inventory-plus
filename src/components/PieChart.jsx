import React from "react";
import Iframe from "react-iframe";

const PieChart1 = (props) => {
  return (
    <Iframe
      styles={props.style}
      className={props.classN}
      src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=653c49ee-410d-4fda-8b40-05e6f3eeabda&maxDataAge=180&theme=dark&autoRefresh=true"
    />
  );
};

const PieChart2 = (props) => {
  return (
    <Iframe
      styles={props.style}
      className={props.classN}
      src="https://charts.mongodb.com/charts-project-0-sgcwj/embed/charts?id=5ab14132-cd12-41cd-90ec-219aab19fbc0&maxDataAge=300&theme=light&autoRefresh=true"
    />
  );
};

export default PieChart1;
export { PieChart2 };
