import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function VolcanGringa() {
    return (
        <>
            <Encabezado />

            <div className="containerT">
                <div className='title'>
                    <h1>VOLCAN Y GRINGA</h1>
                </div>

                <div className="sabores">
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
                </div>
            </div>
        </>
    );
}

export default VolcanGringa;
