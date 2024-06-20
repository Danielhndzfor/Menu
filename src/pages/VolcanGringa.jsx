// Tacos.jsx
import Encabezado from '../components/Encabezado';
import '../css/Tacos.css';

function VolcanGringa() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='title'>
                    <h1>VOLCAN Y GRINGA</h1>
                </div>

                <div className="sabores">
                    <div className="tac">
                        <p className="sabor">Pastor</p>
                        <p className="precio">$18</p>
                    </div>

                    <div className="tac">
                        <p className="sabor">Bistec</p>
                        <p className="precio">$18</p>
                    </div>

                    <div className="tac">
                        <p className="sabor">Chorizo</p>
                        <p className="precio">$18</p>
                    </div>

                    <div className="tac">
                        <p className="sabor">Arrachera</p>
                        <p className="precio">$22</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VolcanGringa;
