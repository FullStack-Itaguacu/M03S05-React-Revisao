import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import CadastroDeEscola from "./pages/CadastroDeEscola/CadastroDeEscola";

export default function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<Inicio />} />
       <Route path="/cadastro-escola" element={<CadastroDeEscola />} />
       <Route path="/cadastro-escola2" element={<CadastroDeEscola />} />
       <Route path="/cadastro-escola2" element={<CadastroDeEscola />} />
       <Route path="/cadastro-escola3" element={<CadastroDeEscola />} />
       <Route path="/cadastro-escola3" element={<CadastroDeEscola />} />

       <Route path="*" element={<div>Página não encontrada</div>} /> 
     </Routes>
   </BrowserRouter>
 )
}
