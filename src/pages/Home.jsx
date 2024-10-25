import { Link } from "react-router-dom";
import '../styles/style.css';
const Home = () => {

  return (
    <div className="titles">
      <h3><Link to={"/consulta/"}>Consulta</Link></h3>
      <h3><Link to={"/ingreso/"}>Ingreso</Link></h3>
      <h3><Link to={"/modificacion"}>Modificacion</Link></h3>
          
          
    </div>
  );
};

export default Home;