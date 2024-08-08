import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { SobreProjeto } from './pages/SobreProjeto';
import { Oportunidades } from './pages/Oportunidades';

function App() {
  return (
    <BrowserRouter>
      <Routes> <Route path="/" element={<Home />} /> </Routes>
      <Routes> <Route path="/SobreProjeto" element={<SobreProjeto/>} /></Routes>
      <Routes> <Route path="/Oportunidades" element={<Oportunidades/>} /></Routes>
    </BrowserRouter>
  );
}

export default App;