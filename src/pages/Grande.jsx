import Encabezado from '../components/Encabezado';
import '../css/Especialidad.css';

function Grande() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>PARRILLADA GRANDE</h1>
                    </div>
                    <div className='ing'>
                        <p>Incluye:</p>
                    </div>
                    <div className='sabores'>
                        <p>4 Ordenes de Especialidad</p>
                        <p>1 Orden Carne Mixta</p>
                        <p>1 Fundido (natural, carne, champiñon o natural)</p>
                    </div>
                    <div className='precio'>
                        <p>$400</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Grande;