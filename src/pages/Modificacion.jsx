import {useState, useEffect} from 'react';
import {deletePerson, getPerson, updatePerson} from '../services/api';
import {useParams, Link, useNavigate} from 'react-router-dom';


const Modificacion = () => {
  const navigate = useNavigate();
  const [paciente, setPaciente] = useState();


  const {id} = useParams();

  console.log('1111111111', id)

  const handleClick = () => {
    updatePerson(paciente);
    setPaciente ({"nombre":"","apellido":"","fechaAlta":""});
  }

  const handleBorrar =async ()=> {
   await deletePerson(id);
    navigate("/consulta/");
  }

  useEffect(()=>{
    getPerson(id).then(data=>{
      console.log('111',data)
      setPaciente(data.data)
    })
  },[])




  
  return (
    <div>

      <p><span style={{fontWeight:'bold'}}>ID</span>: {paciente?.id}</p>
   <label htmlFor="name">Nombre: </label>
      <input id="name" type="text" value={paciente?.nombre} onChange={e => setPaciente({...paciente,"nombre":e.target.value})}/>

      
      <input type="text" value={paciente?.apellido}  onChange={e => setPaciente({...paciente,"apellido":e.target.value})}/>
      <input type="date" value={paciente?.fechaAlta} onChange={e => setPaciente({...paciente, "fechAlta":e.target.value})}/>
      <button onClick={handleClick}>Guardar</button>
      <button onClick={handleBorrar}>Borrar</button>
      <br />
      <h3><Link to={"/"}>Home</Link></h3>
    </div>
  );
};

export default Modificacion;