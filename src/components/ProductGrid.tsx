
import { MenuSection, Product, CartItem } from "../data/menuData";

type Props = {
  section: MenuSection;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateCart: (prodId: number, qty: number) => void;
};

const ProductGrid = ({ section, cart, onAddToCart, onUpdateCart }: Props) => {
  const getPriceLabels = (priceType?: string) => {
    switch (priceType) {
      case 'media-orden':
        return { label1: 'MEDIA', label2: 'ORDEN' };
      case 'natural-carne':
        return { label1: 'NATURAL', label2: 'C/CARNE' };
      case 'medio-kilo':
        return { label1: 'MEDIO', label2: 'KILO' };
      case 'chica-grande':
        return { label1: 'CHICA', label2: 'GRANDE' };
      default:
        return { label1: 'OPCIÓN 1', label2: 'OPCIÓN 2' };
    }
  };

  const createVariantProduct = (product: Product, price: number, variantName: string): Product => {
    return {
      ...product,
      id: product.id * 1000 + (price === product.price ? 1 : 2),
      name: `${product.name} (${variantName})`,
      price: price,
      price2: undefined,
      priceType: undefined
    };
  };

  const getCartItem = (productId: number) => {
    return cart.find(item => item.id === productId);
  };

  const renderProductButton = (product: Product, variant?: { price: number; label: string; colorClass: string }) => {
    const targetProduct = variant ? createVariantProduct(product, variant.price, variant.label) : product;
    const cartItem = getCartItem(targetProduct.id);
    const price = variant ? variant.price : product.price;
    const label = variant ? variant.label : 'AGREGAR';
    const colorClass = variant ? variant.colorClass : 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400';

    if (cartItem) {
      // Mostrar contador si el producto ya está en el carrito
      return (
        <div className={`flex-1 bg-gradient-to-r ${colorClass} text-black px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-between text-sm md:text-base ${!variant ? 'max-w-xs' : ''}`}>
          <span>{label}</span>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => onUpdateCart(targetProduct.id, cartItem.qty - 1)}
              className="w-6 h-6 md:w-7 md:h-7 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center text-sm"
            >
              -
            </button>
            <span className="w-6 md:w-8 text-center font-bold">{cartItem.qty}</span>
            <button
              onClick={() => onUpdateCart(targetProduct.id, cartItem.qty + 1)}
              className="w-6 h-6 md:w-7 md:h-7 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center text-sm"
            >
              +
            </button>
          </div>
        </div>
      );
    }

    // Mostrar botón normal si el producto no está en el carrito
    return (
      <button
        onClick={() => onAddToCart(targetProduct)}
        className={`flex-1 bg-gradient-to-r ${colorClass} text-black px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-between text-sm md:text-base ${!variant ? 'max-w-xs' : ''}`}
      >
        <span>{label}</span>
        <div className="flex items-center gap-1 md:gap-2">
          <span>${price}</span>
          <span className="text-lg leading-none">+</span>
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extralight tracking-widest text-amber-400 mb-8">
        {section.title}
      </h2>
      <div className="grid gap-4 md:gap-6">
        {section.products.map((product) => (
          <div key={product.id} className="bg-gray-800/50 rounded-lg p-4 md:p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300">
            <div className="flex flex-col">
              <h3 className="text-white font-medium text-lg md:text-xl mb-2">{product.name}</h3>
              {product.desc && (
                <p className="text-gray-400 text-sm md:text-base mb-4 leading-relaxed">
                  {product.desc}
                </p>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                {product.price2 ? (
                  // Productos con dos precios
                  <>
                    {renderProductButton(product, {
                      price: product.price,
                      label: getPriceLabels(product.priceType).label1,
                      colorClass: 'from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400'
                    })}
                    {renderProductButton(product, {
                      price: product.price2,
                      label: getPriceLabels(product.priceType).label2,
                      colorClass: 'from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400'
                    })}
                  </>
                ) : (
                  // Productos con un solo precio
                  renderProductButton(product)
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
