import Encabezado from '../components/Encabezado';
import '../css/Kilos.css';

function Ordenes() {
    return (
        <>
            <Encabezado />

            <div class="containerK">
                <div class="title">
                    <h1>ORDENES</h1>
                </div>
                <div class="asados">
                    <div class="opcK">
                        <div class="saborK"></div>
                        <div class="precioM">Medio</div>
                        <div class="precioK">Kilo</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Pastor</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$150</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Chorizo</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$150</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Bistec</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$160</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Chorizo</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$150</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Arrachera</div>
                        <div class="precioM">$120</div>
                        <div class="precioK">$170</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Mixto</div>
                        <div class="precioM">$110</div>
                        <div class="precioK">$170</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ordenes;