import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Consulta from '../pages/Consulta';
import Ingreso from '../pages/Ingreso';
import Modificacion from '../pages/Modificacion';
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="/consulta/" element={<Consulta/>} />
      <Route path="/ingreso/" element={<Ingreso/>} />
      <Route path="/modificacion/:id" element={<Modificacion/>} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
</BrowserRouter>
);

export default Router;