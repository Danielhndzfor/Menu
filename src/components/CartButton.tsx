
import { ShoppingCart } from "lucide-react";
import { CartItem } from "../data/menuData";

type Props = {
  cart: CartItem[];
  onClick: () => void;
};

const CartButton = ({ cart, onClick }: Props) => {
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (itemCount === 0) {
    return (
      <button
        onClick={onClick}
        className="relative p-3 rounded-full bg-gray-800/50 border border-gray-600 hover:border-amber-400/50 transition-all duration-300"
      >
        <ShoppingCart size={20} className="text-gray-400" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 flex items-center space-x-3"
    >
      <div className="relative">
        <ShoppingCart size={18} />
        <span className="absolute -top-2 -right-2 bg-black text-amber-400 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {itemCount}
        </span>
      </div>
      <div className="hidden sm:flex flex-col items-start">
        <span className="text-xs font-light leading-none">{itemCount} items</span>
        <span className="text-sm font-semibold leading-none">${total}</span>
      </div>
    </button>
  );
};

export default CartButton;
