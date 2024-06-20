// Tacos.jsx
import Encabezado from '../../components/Encabezado';
import '../../css/Especialidad.css';

function AlambreXL() {
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className='card'>
                    <div className='titu'>
                        <h1>ALAMBRE XL</h1>
                    </div>
                    <div className='ing'>
                        <p>Ingredientes:</p>
                    </div>
                    <div className='sabores'>
                        <p>Pastor</p>
                        <p>Bistec</p>
                        <p>Chorizo</p>
                        <p>Morrón</p>
                        <p>Cebolla</p>
                        <p>Jitomate</p>
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

export default AlambreXL;