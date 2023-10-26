import { useParams } from "react-router-dom";

const Estimaciones = () => {
  const { aID } = useParams();
  return <h1>Estimaciones / {aID}</h1>;
};

export default Estimaciones;
