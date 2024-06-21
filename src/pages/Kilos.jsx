import Encabezado from '../components/Encabezado';
import '../css/Kilos.css';

function Kilos() {
    return (
        <>
            <Encabezado />

            <div class="containerK">
                <div class="title">
                    <h1>KILOS</h1>
                </div>
                <div class="asados">
                    <div class="opcK">
                        <div class="saborK"></div>
                        <div class="precioM">Medio</div>
                        <div class="precioK">Kilo</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Natural</div>
                        <div class="precioM">$80</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Pastor</div>
                        <div class="precioM">$90</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Bistec</div>
                        <div class="precioM">$90</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Chorizo</div>
                        <div class="precioM">$90</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Arrachera</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Mixto</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$80</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Especial</div>
                        <div class="precioM">$100</div>
                        <div class="precioK">$80</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kilos;