import Encabezado from '../components/Encabezado';
import '../css/Especialidad.css';

function AlambrePollo() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>ALAMBRE DE POLLO</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>Pollo</p>
                        <p>Jamón</p>
                        <p>Morrón</p>
                        <p>Jitomate</p>
                        <p>Cebolla</p>
                        <p>Piña</p>
                        <p>Tocino</p>
                        <p>Queso</p>
                    </div>
                    <div className='precioL'>
                        <p>Media $110</p>
                        <p>Orden $150</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlambrePollo;