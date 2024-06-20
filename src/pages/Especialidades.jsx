import Encabezado from "../components/Encabezado";
import '../css/Especialidades.css';
import { Link } from 'react-router-dom';

function Especialidades() {
    return (
        <>
            <Encabezado />

            <div className="containerEsp">
                <div className='titleEsp'>
                    <h1>ESPECIALIDADES</h1>
                </div>

                <div className="tipos">
                    <Link to="/colima" className="esp">
                        <p className="espOpc">COLIMA</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/honolulu" className="esp">
                        <p className="espOpc">HONOLULU</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/sinnombre" className="esp">
                        <p className="espOpc">SIN NOMBRE</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/quemenotas" className="esp">
                        <p className="espOpc">QUE ME NOTAS</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/alambrepollo" className="esp">
                        <p className="espOpc">ALAMBRE DE POLLO</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/alambrexl" className="esp">
                        <p className="espOpc">ALAMBRE XL</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/atuncito" className="esp">
                        <p className="espOpc">ATUNCITO</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/mexico" className="esp">
                        <p className="espOpc">MÉXICO</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/yatevi" className="esp">
                        <p className="espOpc">YA TE VI</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/taquiqueso" className="esp">
                        <p className="espOpc">TAQUIQUESO</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
                            <path d="M16 12l-4 -4" />
                            <path d="M16 12h-8" />
                            <path d="M12 16l4 -4" />
                        </svg>
                    </Link>

                    <Link to="/sinaloa" className="esp">
                        <p className="espOpc">SINALOA</p>
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

export default Especialidades;