import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Tacos from './pages/Tacos.jsx'
import Especialidades from './pages/Especialidades.jsx'
import VolcanGringa from './pages/VolcanGringa.jsx'
import Pellizcada from './pages/Pellizcada.jsx'
import Papas from './pages/Papas.jsx'
import Kilos from './pages/Kilos.jsx'

// Especialidades
import Colima from './pages/Colima.jsx'
import Honolulu from './pages/Honolulu.jsx'
import SinNombre from './pages/SinNombre.jsx'
import QueMeNotas from './pages/QueMeNotas.jsx'
import AlambrePollo from './pages/AlambrePollo.jsx'
import AlambreXL from './pages/AlambreXL.jsx'
import Atuncito from './pages/Atuncito.jsx'
import Mexico from './pages/Mexico.jsx'
import YaTeVi from './pages/YaTeVi.jsx'
import Taquiqueso from './pages/Taquiqueso.jsx'
import Sinaloa from './pages/Sinaloa.jsx'


function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />ç

                    <Route path="menu" element={<Menu />} />
                    <Route path="tacos" element={<Tacos />} />
                    <Route path="especialidades" element={<Especialidades />} />
                    <Route path="volcangringa" element={<VolcanGringa />} />
                    <Route path="pellizcada" element={<Pellizcada />} />
                    <Route path="papas" element={<Papas />} />
                    <Route path="kilos" element={<Kilos />} />

                    <Route path="colima" element={<Colima />} />
                    <Route path="honolulu" element={<Honolulu />} />
                    <Route path="sinnombre" element={<SinNombre />} />
                    <Route path="quemenotas" element={<QueMeNotas />} />
                    <Route path="alambrepollo" element={<AlambrePollo />} />
                    <Route path="alambrexl" element={<AlambreXL />} />
                    <Route path="atuncito" element={<Atuncito />} />
                    <Route path="mexico" element={<Mexico />} />
                    <Route path="yatevi" element={<YaTeVi />} />
                    <Route path="taquiqueso" element={<Taquiqueso />} />
                    <Route path="sinaloa" element={<Sinaloa />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
