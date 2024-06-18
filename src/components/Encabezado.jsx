// Encabezado.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

function Encabezado() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <div className="back" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width="55" height="55" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                </svg>
            </div>
            <a href="/">
                <div className='LogoBox'>
                    <img className='Logo' src={Logo} alt="Logo Oficial" />
                </div>
            </a>
        </div>
    );
}

export default Encabezado;
