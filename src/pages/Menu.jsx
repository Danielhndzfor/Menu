// Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Encabezado from '../components/Encabezado';
import '../css/Menu.css';

function Menu() {
    return (
        <>
            <Encabezado />

            <div className='cardContainer'>
                <Link to="/especialidades" className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="ESPECIALIDADES"
                    >
                    </Card>
                </Link>

                <Link to="/tacos" className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="TACOS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="VOLCAN Y GRINGA"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="PELLIZCADA"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="PAPAS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="KILOS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="QUESOS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="ORDENES"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="PARRILLADAS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="BEBIDAS"
                    >
                    </Card>
                </Link>

                <Link className='link'>
                    <Card
                        image="https://via.placeholder.com/150"
                        title="EXTRAS"
                    >
                    </Card>
                </Link>

            </div>
        </>
    );
}

export default Menu;
