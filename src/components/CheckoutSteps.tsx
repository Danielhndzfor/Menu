import { useState } from "react";
import { CartItem as CartItemType } from "../data/menuData";
import { sendWhatsappOrder } from "../utils/whatsapp";
import CartItem from "./CartItem";

type Props = {
  currentStep: number;
  cart: CartItemType[];
  total: number;
  updateCart: (prodId: number, qty: number) => void;
  updateCartObservations: (prodId: number, observations: string) => void;
  onStepComplete: (step: number) => void;
  onBack: () => void;
};

const CheckoutSteps = ({
  currentStep,
  cart,
  total,
  updateCart,
  updateCartObservations,
  onStepComplete,
  onBack
}: Props) => {
  const [customerData, setCustomerData] = useState({
    nombre: "",
    telefono: "",
    calle: "",
    numero: "",
    colonia: "",
    tipo: "recoger"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCustomerData({ ...customerData, [e.target.name]: e.target.value });
  };

  const validateStep2 = () => {
    if (customerData.tipo === "recoger") {
      return customerData.nombre && customerData.telefono;
    } else {
      return customerData.nombre && customerData.telefono &&
        customerData.calle && customerData.numero && customerData.colonia;
    }
  };

  const handleConfirmOrder = () => {
    sendWhatsappOrder(cart, customerData);
    onStepComplete(3);
  };

  if (currentStep === 1) {
    return (
      <div className="p-4 sm:p-6 flex flex-col h-[65vh] sm:h-[65vh]"> {/* Cambia aquí la altura si lo necesitas */}
        <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-4">Revisa tu pedido</h4>
        {cart.length === 0 ? (
          <p className="text-gray-400 text-center py-8 text-sm sm:text-base flex-1">Tu carrito está vacío</p>
        ) : (
          <div className="space-y-3 mb-6 flex-1 overflow-y-auto">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQty={updateCart}
                onUpdateObservations={updateCartObservations}
              />
            ))}
          </div>
        )}
        <div className="border-t border-gray-700 pt-4 mt-2">
          <div className="flex justify-between text-lg sm:text-xl font-bold text-amber-400 mb-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button
            onClick={() => onStepComplete(1)}
            disabled={cart.length === 0}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black py-2 sm:py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 2) {
    return (
      <div className="p-4 sm:p-6">
        <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-4">Tus datos</h4>
        <div className="space-y-3 sm:space-y-4 mb-6 max-h-64 sm:max-h-80 overflow-y-auto">
          <div>
            <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="tipo">
              Tipo de entrega *
            </label>
            <select
              id="tipo"
              name="tipo"
              value={customerData.tipo}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
            >
              <option value="recoger">Para recoger</option>
              <option value="domicilio">A domicilio</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="nombre">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={customerData.nombre}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="telefono">
              Teléfono *
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={customerData.telefono}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
              required
            />
          </div>

          {customerData.tipo === "domicilio" && (
            <>
              <div>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="calle">
                  Calle *
                </label>
                <input
                  type="text"
                  id="calle"
                  name="calle"
                  value={customerData.calle}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="numero">
                  Número *
                </label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={customerData.numero}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm sm:text-base" htmlFor="colonia">
                  Colonia *
                </label>
                <input
                  type="text"
                  id="colonia"
                  name="colonia"
                  value={customerData.colonia}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-amber-400 outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
              </div>
            </>
          )}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onBack}
            className="flex-1 bg-gray-700 text-white py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base"
          >
            Volver
          </button>
          <button
            onClick={() => onStepComplete(2)}
            disabled={!validateStep2()}
            className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black py-2 sm:py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-sm sm:text-base"
          >
            Continuar
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 3) {
    return (
      <div className="p-4 sm:p-6">
        <h4 className="text-base sm:text-lg font-semibold text-amber-400 mb-4">Confirmar pedido</h4>
        <div className="space-y-4 mb-6 max-h-64 sm:max-h-80 overflow-y-auto">
          <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50">
            <h5 className="font-semibold text-amber-400 mb-2 text-sm sm:text-base">Resumen del pedido:</h5>
            <div className="space-y-1 text-xs sm:text-sm text-gray-300 mb-3">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.qty}x {item.name}</span>
                  <span>${item.price * item.qty}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-600 pt-2">
              <div className="flex justify-between font-bold text-amber-400 text-sm sm:text-base">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50">
            <h5 className="font-semibold text-amber-400 mb-2 text-sm sm:text-base">Datos del cliente:</h5>
            <div className="text-xs sm:text-sm text-gray-300 space-y-1">
              <p><span className="text-white">Nombre:</span> {customerData.nombre}</p>
              <p><span className="text-white">Teléfono:</span> {customerData.telefono}</p>
              <p><span className="text-white">Entrega:</span> {customerData.tipo === "recoger" ? "Para recoger" : "A domicilio"}</p>
              {customerData.tipo === "domicilio" && (
                <>
                  <p><span className="text-white">Calle:</span> {customerData.calle}</p>
                  <p><span className="text-white">Número:</span> {customerData.numero}</p>
                  <p><span className="text-white">Colonia:</span> {customerData.colonia}</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onBack}
            className="flex-1 bg-gray-700 text-white py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-600 transition-colors duration-300 text-sm sm:text-base"
          >
            Volver
          </button>
          <button
            onClick={handleConfirmOrder}
            className="flex-1 bg-green-600 text-white py-2 sm:py-3 rounded-lg font-bold hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base"
          >
            Enviar Pedido
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default CheckoutSteps;
