import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Tacos from './pages/Tacos.jsx'
import Especialidades from './pages/Especialidades.jsx'

// Especialidades
import Colima from './pages/Especialidades/Colima.jsx'
import Honolulu from './pages/Especialidades/Honolulu.jsx'
import SinNombre from './pages/Especialidades/SinNombre.jsx'
import QueMeNotas from './pages/Especialidades/QueMeNotas.jsx'
import AlambrePollo from './pages/Especialidades/AlambrePollo.jsx'
import AlambreXL from './pages/Especialidades/AlambreXL.jsx'
import Atuncito from './pages/Especialidades/Atuncito.jsx'
import Mexico from './pages/Especialidades/Mexico.jsx'
import YaTeVi from './pages/Especialidades/YaTeVi.jsx'
import Taquiqueso from './pages/Especialidades/Taquiqueso.jsx'
import Sinaloa from './pages/Especialidades/Sinaloa.jsx'


function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="tacos" element={<Tacos />} />
                    <Route path="especialidades" element={<Especialidades />} />
                    <Route path="especialidades/colima" element={<Colima />} />
                    <Route path="especialidades/honolulu" element={<Honolulu />} />
                    <Route path="especialidades/sinnombre" element={<SinNombre />} />
                    <Route path="especialidades/quemenotas" element={<QueMeNotas />} />
                    <Route path="especialidades/alambrepollo" element={<AlambrePollo />} />
                    <Route path="especialidades/alambrexl" element={<AlambreXL />} />
                    <Route path="especialidades/atuncito" element={<Atuncito />} />
                    <Route path="especialidades/mexico" element={<Mexico />} />
                    <Route path="especialidades/yatevi" element={<YaTeVi />} />
                    <Route path="especialidades/taquiqueso" element={<Taquiqueso />} />
                    <Route path="especialidades/sinaloa" element={<Sinaloa />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
