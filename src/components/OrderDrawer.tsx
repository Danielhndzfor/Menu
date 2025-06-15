import { useState } from "react";
import { X } from "lucide-react";
import { CartItem } from "../data/menuData";
import CheckoutSteps from "./CheckoutSteps";
import React from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  updateCart: (prodId: number, qty: number) => void;
  updateCartObservations: (prodId: number, observations: string) => void;
  emptyCart: () => void;
};

const OrderDrawer = ({ 
  open, 
  onClose, 
  cart, 
  updateCart, 
  updateCartObservations,
  emptyCart 
}: Props) => {
  const [currentStep, setCurrentStep] = useState(1);

  if (!open) return null;

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handleStepComplete = (step: number) => {
    if (step < 3) {
      setCurrentStep(step + 1);
    } else {
      emptyCart();
      setCurrentStep(1);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl border border-amber-500/20 relative max-h-[85vh] sm:max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-amber-500/20">
          <h3 className="text-lg sm:text-xl md:text-2xl font-extralight tracking-widest text-amber-400">TU PEDIDO</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800/50 transition-colors duration-300 text-gray-400 hover:text-white"
          >
            <X size={18} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-4 sm:px-6 py-4 sm:py-6 border-b border-gray-800/50">
          {/* Círculos y líneas */}
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-all duration-300 ${
                      currentStep >= step
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/25"
                        : "bg-gray-800 text-gray-400 border border-gray-600"
                    }`}
                  >
                    {step}
                  </div>
                  {/* Etiqueta debajo del círculo */}
                  <span className={`mt-2 text-xs sm:text-sm font-medium text-center w-12 sm:w-16 ${
                    currentStep >= step ? "text-amber-400" : "text-gray-500"
                  }`}>
                    {step === 1 && "Revisar"}
                    {step === 2 && "Datos"}
                    {step === 3 && "Confirmar"}
                  </span>
                </div>
                {/* Línea solo entre círculos */}
                {idx < 2 && (
                  <div className="w-8 sm:w-16 h-1 bg-gray-700 mx-2 sm:mx-4 flex-shrink-0 flex items-center">
                    <div className={`w-full h-1 rounded ${currentStep > step ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-gray-700"}`}></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <CheckoutSteps
            currentStep={currentStep}
            cart={cart}
            total={total}
            updateCart={updateCart}
            updateCartObservations={updateCartObservations}
            onStepComplete={handleStepComplete}
            onBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderDrawer;
