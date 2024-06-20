import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function Pellizcada() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>PELLIZCADA</h1>
                </div>

                <div className="sabores">
                    <div className="tacos">
                        <p className="saborT">Pastor</p>
                        <p className="precioT">$75</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Bistec</p>
                        <p className="precioT">$75</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Chorizo</p>
                        <p className="precioT">$75</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Arrachera</p>
                        <p className="precioT">$75</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pellizcada;