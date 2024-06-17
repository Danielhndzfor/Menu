// Menu.jsx
import React from 'react';
import Card from '../components/Card';
import Logo from '../assets/logo.png';
import '../css/Menu.css';

function Menu() {
    return (
        <>
            <div className="main">
                <a href='/' className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l14 0" />
                        <path d="M5 12l6 6" />
                        <path d="M5 12l6 -6" />
                    </svg>
                </a>
                <div className='LogoBox'>
                    <img className='Logo' src={Logo} alt="Logo Oficial" />
                </div>
            </div>

            <div className='cardContainer'>
                <Card
                    image="https://via.placeholder.com/150"
                    title="ESPECIALIDADES"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="TACOS"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="VOLCAN Y GRINGA"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="PELLIZCADA"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="PAPAS"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="KILOS"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="QUESOS"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="ORDENES"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="PARRILLADAS"
                >
                </Card>

                <Card
                    image="https://via.placeholder.com/150"
                    title="BEBIDAS"
                >
                </Card>
                <Card
                    image="https://via.placeholder.com/150"
                    title="EXTRAS"
                >
                </Card>

            </div>
        </>
    );
}

export default Menu;
