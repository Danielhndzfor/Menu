import Encabezado from '../components/Encabezado';
import '../css/Especialidad.css';

function Chica() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>PARRILLADA CHICA</h1>
                    </div>
                    <div className='ing'>
                        <p>Incluye:</p>
                    </div>
                    <div className='sabores'>
                        <p>2 Ordenes de Especialidad</p>
                        <p>1 Orden Carne Mixta</p>
                        <p>2 Quesadillas Naturales</p>
                    </div>
                    <div className='precio'>
                        <p>$400</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Chica;