import { useState } from "react";
import { savePersonName } from "../services/api";
import { Link } from "react-router-dom";
Link

const Ingreso = () => {
  const [name, setName] = useState();
  const [apellido, setApellido] = useState();
  const [fecha, setFecha] = useState();

  const handleSubmit = () => {
    savePersonName({nombre:name, apellido:apellido, fechaAlta:fecha});
  
    setName("");
    setApellido("");
    setFecha("");
  }
  return (
    <div>
      <input type="text" onChange={e=>setName(e.target.value)} value={name} placeholder="Nombre" />
      <input type="text" onChange={e=>setApellido(e.target.value)} value={apellido} placeholder="Apellido" />
      <input type="date" onChange={e=>setFecha(e.target.value)} value={fecha} placeholder="Fecha de Alta" />
      <button onClick={handleSubmit}>Enviar</button>
      <br />
      <Link to={"/"}>Home</Link>

    </div>
  );
};

export default Ingreso;