import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from  '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Diario from '../pages/Diario/Diario'


function ApplicationRoutes() {
  return(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="diario" element={<Diario />} />
        <Route path="comentarios" element={<Comentarios />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default ApplicationRoutes