// Tacos.jsx
import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function Bebidas() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>BEBIDAS</h1>
                </div>

                <div className="sabores">
                    <div className="tacos">
                        <p className="saborT">Refresco</p>
                        <p className="precioT">$20</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Agua Fresca Chica</p>
                        <p className="precioT">$20</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Agua Fresca Litro</p>
                        <p className="precioT">$35</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Jarra</p>
                        <p className="precioT">$60</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bebidas;
