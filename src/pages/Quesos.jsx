import Encabezado from '../components/Encabezado';
import '../css/Kilos.css';

function Quesos() {
    return (
        <>
            <Encabezado />

            <div class="containerK">
                <div class="title">
                    <h1>QUESOS</h1>
                </div>
                <div class="asados">
                    <div class="opcK">
                        <div class="saborK"></div>
                        <div class="precioM">Natural</div>
                        <div class="precioK">C/Carne</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Fundido</div>
                        <div class="precioM">$95</div>
                        <div class="precioK">$110</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Quesadilla</div>
                        <div class="precioM">$27</div>
                        <div class="precioK">$40</div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Chicharron</div>
                        <div class="precioM">$100</div>
                        <div class="precioK"></div>
                    </div>
                    <div class="kilos">
                        <div class="saborK">Quesito Colima</div>
                        <div class="precioM">$30</div>
                        <div class="precioK"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Quesos;