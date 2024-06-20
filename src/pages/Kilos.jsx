import Encabezado from '../components/Encabezado';
import '../css/Kilos.css';

function Papas() {
    return (
        <>
            <Encabezado />

            <div className="containerK">
                <div className='title'>
                    <h1>KILOS</h1>
                </div>
                <div className="opcK">
                    <p>Medio</p>
                    <p>Kilo</p>
                </div>

                <div className="asados">
                    <div className="kilos">
                        <p className="saborK">Natural</p>
                        <p className="precioM">$80</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Pastor</p>
                        <p className="precioM">$90</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Bistec</p>
                        <p className="precioM">$90</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Chorizo</p>
                        <p className="precioM">$90</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Arrachera</p>
                        <p className="precioM">$100</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Mixto</p>
                        <p className="precioM">$100</p>
                        <p className="precioK">$80</p>
                    </div>

                    <div className="kilos">
                        <p className="saborK">Especial</p>
                        <p className="precioM">$100</p>
                        <p className="precioK">$80</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Papas;