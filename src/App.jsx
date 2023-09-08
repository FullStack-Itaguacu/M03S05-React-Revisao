import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import CadastroDeEscola from "./pages/CadastroDeEscola/CadastroDeEscola";
import Menu from "./components/Menu/Menu";
import Piadas from "./pages/Piadas/Piadas";

export default function App() {
 return (
   <BrowserRouter>
     <Menu />
     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path="/cadastro-escola" element={<CadastroDeEscola />} />
        <Route path="/piadas" element={<Piadas />} />

       <Route path="*" element={<div>Página não encontrada</div>} /> 
     </Routes>
   </BrowserRouter>
 )
}
