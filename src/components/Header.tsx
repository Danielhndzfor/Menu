
import { Menu } from "lucide-react";
import CartButton from "./CartButton";
import { CartItem } from "../data/menuData";

type Props = {
  cart: CartItem[];
  onCartClick: () => void;
  onSidebarToggle: () => void;
};

const Header = ({ cart, onCartClick, onSidebarToggle }: Props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onSidebarToggle}
            className="lg:hidden p-2 rounded-lg bg-gray-800/50 border border-gray-600 hover:border-amber-400/50 transition-all duration-300"
          >
            <Menu size={20} className="text-amber-400" />
          </button>
          <img
            src="/logo.png"
            alt="Colimas Logo"
            className="w-12 h-12 rounded-full border-2 border-amber-400"
          />
          <div>
            <h1 className="text-2xl font-extralight tracking-widest text-amber-400">COLIMA'S</h1>
            <p className="text-xs text-gray-400 tracking-wider">TAQUERÍA & PAPAS</p>
          </div>
        </div>
        
        <CartButton 
          cart={cart} 
          onClick={onCartClick} 
        />
      </div>
    </header>
  );
};

export default Header;
