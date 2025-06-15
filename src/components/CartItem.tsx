import { useState } from "react";
import { CartItem as CartItemType } from "../data/menuData";
import { Textarea } from "./ui/textarea";

type Props = {
  item: CartItemType;
  onUpdateQty: (id: number, qty: number) => void;
  onUpdateObservations: (id: number, observations: string) => void;
};

const CartItem = ({ item, onUpdateQty, onUpdateObservations }: Props) => {
  const [showObservations, setShowObservations] = useState(false);

  return (
    <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 space-y-3">
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-3">
          <span className="text-white font-medium text-sm sm:text-base block">{item.name}</span>
          {item.desc && (
            <p className="text-xs text-gray-400 mt-1 line-clamp-2">{item.desc}</p>
          )}
          <p className="text-amber-400 font-bold mt-1 text-sm sm:text-base">
            ${item.price} c/u = ${item.price * item.qty}
          </p>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 justify-center mt-2">
          <button
            onClick={() => onUpdateQty(item.id, item.qty - 1)}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center text-base"
          >
            -
          </button>
          <span className="text-white font-bold w-7 sm:w-8 text-center text-base">
            {item.qty}
          </span>
          <button
            onClick={() => onUpdateQty(item.id, item.qty + 1)}
            className="w-7 h-7 sm:w-8 sm:h-8 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center text-base"
          >
            +
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700/50 pt-2">
        <button
          onClick={() => setShowObservations(!showObservations)}
          className="text-xs sm:text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          {showObservations ? "Ocultar observaciones" : "Agregar observaciones"}
        </button>
        
        {showObservations && (
          <div className="mt-2">
            <Textarea
              placeholder="Ej: Sin cebolla, extra salsa, etc..."
              value={item.observations || ""}
              onChange={(e) => onUpdateObservations(item.id, e.target.value)}
              className="bg-gray-900 border-gray-600 text-white text-xs sm:text-sm min-h-[60px] resize-none"
            />
          </div>
        )}
        
        {item.observations && !showObservations && (
          <p className="text-xs text-gray-300 mt-1 italic">
            Observaciones: {item.observations}
          </p>
        )}
      </div>
    </div>
  );
};

export default CartItem;
