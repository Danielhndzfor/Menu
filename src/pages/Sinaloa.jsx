import Encabezado from '../components/Encabezado';
import '../css/Especialidad.css';

function Sinaloa() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>SINALOA</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>Arrachera</p>
                        <p>Pastor</p>
                        <p>Cebolla</p>
                        <p>Tocino</p>
                        <p>Queso</p>
                        <p>Tortilla Frita</p>
                    </div>
                    <div className='precio'>
                        <p>Media $130</p>
                        <p>Orden $170</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sinaloa;