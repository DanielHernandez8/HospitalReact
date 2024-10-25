import { useEffect, useState } from "react";
import { getPersons } from "../services/api";
import {Link} from 'react-router-dom';

const Consulta = () => {
  const [paciente, setPaciente] = useState([]);

  useEffect(()=>{
    getPersons().then(data=>{
      console.log('111',data)
      setPaciente(data.data)
    })
  },[])
  return (
    <div>
  {paciente.map((paciente) => (
    <div key={paciente.id}>
     <Link to={`/modificacion/${paciente.id}`}> <p><strong>ID:</strong> {paciente.id}</p></Link>
      <p><strong>Nombre:</strong> {paciente.nombre}</p>
      <p><strong>Apellido:</strong> {paciente.apellido}</p>
      <p><strong>Fecha de Alta:</strong> {paciente.fechaAlta}</p>
      <p>-------------------------------------------------</p>
      <br />
  
    </div>
  ))}
      <Link to={"/"}>Home</Link>
</div>
  );
};

export default Consulta;