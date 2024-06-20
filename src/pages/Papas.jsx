import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function Papas() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>PAPAS</h1>
                </div>

                <div className="sabores">
                    <div className="tacos">
                        <p className="saborT">Natural</p>
                        <p className="precioT">$80</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Pastor</p>
                        <p className="precioT">$90</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Bistec</p>
                        <p className="precioT">$90</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Chorizo</p>
                        <p className="precioT">$90</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Arrachera</p>
                        <p className="precioT">$100</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Mixto</p>
                        <p className="precioT">$100</p>
                    </div>

                    <div className="tacos">
                        <p className="saborT">Especial</p>
                        <p className="precioT">$100</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Papas;