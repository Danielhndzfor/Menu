// Menu.jsx
import React from 'react';
import Card from '../components/Card';
import Logo from '../assets/logo.png';
import '../css/Menu.css';

function Menu() {
    return (
        <>
            <div className='LogoBox'>
                <img className='Logo' src={Logo} alt="Logo Oficial" />
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
