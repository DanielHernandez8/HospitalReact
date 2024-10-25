import {useState, useEffect} from 'react';
import {getPerson} from '../services/api';
import { useParams } from 'react-router-dom';


const Modificacion = () => {
  const [paciente, setPaciente] = useState();

  const params = useParams();

  useEffect(()=>{
    getPerson(params.id).then(data=>{
      console.log('111',data)
      setPaciente(data.data)
    })
  },[])




  
  return (
    <div>
      {paciente?.id}
      <input type="text" value={paciente?.nombre} onChange={e => setPaciente({...paciente,"nombre":e.target.value})}/>
      <input type="text" />
    </div>
  );
};

export default Modificacion;