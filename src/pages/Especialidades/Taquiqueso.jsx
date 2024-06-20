// Tacos.jsx
import Encabezado from '../../components/Encabezado';
import '../../css/Especialidad.css';

function Taquiqueso() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>TAQUIQUESO</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>
                            Carne a elección dentro de una tortilla con queso
                        </p>
                        
                    </div>
                    <div className='precioL'>
                        <p>Media $110</p>
                        <p>Orden $155</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Taquiqueso;