import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../css/Home.css';

function Home() {
    const handleAddContact = () => {
        const contactInfo = {
            name: 'Colimas Tacos & Papas',
            phone: '3123099268',
            address: 'Prolongacion Hidalgo #926 A, Colima, Mexico'
        };

        const vCard = `BEGIN:VCARD
                        VERSION:3.0
                        FN:${contactInfo.name}
                        TEL;TYPE=CELL:${contactInfo.phone}
                        ADR:${contactInfo.address}
                        END:VCARD`;

        const blob = new Blob([vCard], { type: 'text/vcard' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'contacto.vcf';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <div className='LogoBox'>
                <a href="/">
                    <img className='Logo' src={Logo} alt="Logo Oficial" />
                </a>
            </div>

            <h2 className='Titulo'>
                Colimas Tacos & Papas
            </h2>

            <div className="container1">
                {/* Menu */}
                <Link to="/menu" className="opcBox">
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools-kitchen" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 3h8l-1 9h-6z" />
                            <path d="M7 18h2v3h-2z" />
                            <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
                            <path d="M20 15v6h-1v-3" />
                            <path d="M8 12l0 6" />
                        </svg>
                        <h3>Menú</h3>
                    </div>
                </Link>

                {/* Facebook */}
                <Link to="https://www.facebook.com/ColimasTacosPapas?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="opcBox">
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                        <h3>ColimasTacos&Papas</h3>
                    </div>
                </Link>

                {/* WhatsApp */}
                <Link to="https://wa.me/3123099268" target="_blank" rel="noopener noreferrer" className="opcBox">
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                        </svg>
                        <h3>312-309-9268</h3>
                    </div>
                </Link>

                {/* Ubicación */}
                <Link to="https://maps.app.goo.gl/ChX4usjyGMkBeuQw7" target="_blank" rel="noopener noreferrer" className="opcBox">
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <h3>Prolongacion Hidalgo <br /> #926 A, Colima,<br /> Mexico</h3>
                    </div>
                </Link>

                {/* Contacto */}
                <div className="opcBox" onClick={handleAddContact}>
                    <div className="boxTitle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-address-book" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z" />
                            <path d="M10 16h6" />
                            <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M4 8h3" />
                            <path d="M4 12h3" />
                            <path d="M4 16h3" />
                        </svg>
                        <h3>Agregar Contacto</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

