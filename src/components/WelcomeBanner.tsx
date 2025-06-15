import React, { useState } from "react";

const WelcomeBanner = () => {
    const [showTutorial, setShowTutorial] = useState(true);

    if (!showTutorial) return null; // Esto hace que desaparezca todo

    return (
        <section className="w-full bg-gradient-to-t from-black via-gray-900 to-amber-700/10 rounded-2xl shadow-lg border border-amber-400/30 mb-8 px-4 py-7 sm:py-10 sm:px-10 text-center">
            <h2 className="text-4xl sm:text-5xl font-extralight tracking-widest text-amber-400 mb-3 drop-shadow">
                ¡Bienvenido a Colimas Taquería & Papas!
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 font-light mb-4 max-w-2xl mx-auto">
                Autenticidad, sabor y tradición en cada taco y papa que preparamos para ti.
            </p>
            <div className="text-md sm:text-lg text-amber-200 max-w-2xl mx-auto space-y-2">
                <p>
                    <b>¿Cómo funciona el sistema?</b>
                </p>
                <ul className="list-disc list-inside text-left mx-auto text-amber-100 space-y-1">
                    <li>Explora nuestro menú y agrega tus antojos al carrito.</li>
                    <li>Personaliza tus pedidos con observaciones como “sin cebolla”, “extra salsa”, etc.</li>
                    <li>Cuando termines, revisa tu carrito y pulsa en enviar pedido.</li>
                    <li>
                        ¡Te redirigiremos a WhatsApp para confirmar tu orden directamente con nosotros!
                    </li>
                </ul>
                <p className="mt-3 italic text-amber-300">
                    * No olvides verificar tus datos antes de finalizar. ¡Gracias por preferirnos!
                </p>
                <button
                    onClick={() => setShowTutorial(false)}
                    className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-full font-bold shadow hover:scale-105 transition-all"
                >
                    ¡Entendido!
                </button>
            </div>

            {/* al{" "}<a className="underline text-amber-400" href="https://wa.me/523123099268" target="_blank" rel="noopener noreferrer">
                            312 309 9268
                        </a> */}
                        
        </section>
    );
};

export default WelcomeBanner;

