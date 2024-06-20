// Tacos.jsx
import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function Tacos() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>TACOS</h1>
                </div>

                <div className="sabores">
                    <div className="tacos">
                        <p className="saborT">Pastor</p>
                        <p className="precioT">$18</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Bistec</p>
                        <p className="precioT">$18</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Chorizo</p>
                        <p className="precioT">$18</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Arrachera</p>
                        <p className="precioT">$22</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tacos;
