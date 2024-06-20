import Encabezado from '../components/Encabezado';
import '../css/Especialidad.css';

function Mexico() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>MEXICO</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>Pastor</p>
                        <p>Bistec</p>
                        <p>Jalapeño</p>
                        <p>Cebolla</p>
                        <p>Queso</p>
                    </div>
                    <div className='precio'>
                        <p>Media $110</p>
                        <p>Orden $150</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mexico;