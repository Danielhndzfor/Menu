import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function Extras() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>EXTRAS</h1>
                </div>

                <div className="sabores">
                    <div className="tacos">
                        <p className="saborT">Carne</p>
                        <p className="precioT">$20</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Cebolla Frita</p>
                        <p className="precioT">$20</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Extras;
