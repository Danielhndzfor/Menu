import Encabezado from "../components/Encabezado";
import '../css/Especialidades.css';
import { Link } from 'react-router-dom';

function Parrilladas() {
    return (
        <>
            <Encabezado />

            <div className="containerEsp">
                <div className='titleEsp'>
                    <h1>PARRILLADAS</h1>
                </div>

                <div className="tipos">
                    <Link to="/chica" className="esp">
                        <p className="espOpc">PARRILLADA CHICA</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/grande" className="esp">
                        <p className="espOpc">PARRILLADA GRANDE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Parrilladas;