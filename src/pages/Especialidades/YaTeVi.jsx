// Tacos.jsx
import Encabezado from '../../components/Encabezado';
import '../../css/Especialidad.css';

function YaTeVi() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>YA TE VI</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>Bistec</p>
                        <p>Champiñon</p>
                        <p>Tocino</p>
                        <p>Queso</p>
                    </div>
                    <div className='precio'>
                        <p>Media $110</p>
                        <p>Orden $155</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YaTeVi;