import React, { useState } from "react";
import { MenuSection, Product, CartItem, ExtraOption } from "../data/menuData";

type Props = {
  section: MenuSection;
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateCart: (prodId: number, qty: number) => void;
};

const ProductGrid = ({ section, cart, onAddToCart, onUpdateCart }: Props) => {
  const [showExtrasModal, setShowExtrasModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [sinExtra, setSinExtra] = useState(false);
  const [cantidad, setCantidad] = useState(1);
  const [promoQty, setPromoQty] = useState<{ [id: number]: number }>({});

  // Define las opciones de carne y especialidades
  const carnes = ["Pastor", "Bistec", "Chorizo", "Arrachera"];
  const especialidades = [
    "Colima", "Honolulu", "Sin Nombre", "Que Me Notas", "Alambre De Pollo",
    "Alambre XL", "Atuncito", "México", "Ya Te Vi", "Taquiqueso", "Sinaloa", "Vegetariana"
  ];

  // Estados para selección especial
  const [mixtoCarnes, setMixtoCarnes] = useState<string[]>([]);
  const [especialidad, setEspecialidad] = useState<string>("");

  const openExtrasModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedExtras([]);
    setSinExtra(false);
    setCantidad(1);
    setShowExtrasModal(true);
  };

  const closeExtrasModal = () => {
    setShowExtrasModal(false);
    setSelectedProduct(null);
    setSelectedExtras([]);
    setSinExtra(false);
    setCantidad(1);
    setMixtoCarnes([]);
    setEspecialidad("");
  };

  const handleExtraChange = (key: string) => {
    setSelectedExtras(prev =>
      prev.includes(key)
        ? prev.filter(e => e !== key)
        : [...prev, key]
    );
  };

  const handleSinExtra = () => {
    setSinExtra(!sinExtra);
    if (!sinExtra) setSelectedExtras([]);
  };

  const handleCantidad = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCantidad(Math.max(1, Number(e.target.value)));
  };

  const addToCartWithExtras = () => {
    if (!selectedProduct) return;
    const extrasElegidos = sinExtra
      ? []
      : selectedProduct.extras?.filter(e => selectedExtras.includes(e.key)) || [];
    const extrasText = sinExtra
      ? "Sin extra"
      : extrasElegidos.length > 0
        ? extrasElegidos.map(e => e.name).join(", ")
        : "";

    let selectionText = "";
    if (selectedProduct.selectType === "mixto") {
      selectionText = mixtoCarnes.length === 2 ? `(${mixtoCarnes.join(", ")})` : "";
    }
    if (selectedProduct.selectType === "especial") {
      selectionText = especialidad ? `(${especialidad})` : "";
    }

    const productName = `${selectedProduct.name}${selectionText}${extrasText ? ` (${extrasText})` : ""}`;
    for (let i = 0; i < cantidad; i++) {
      onAddToCart({
        ...selectedProduct,
        promo: section.key === "promociones",
        name: selectedProduct.name, // <-- solo el nombre limpio
        extras: extrasElegidos,
      });
    }
    closeExtrasModal();
    setMixtoCarnes([]);
    setEspecialidad("");
  };

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

  const createVariantProduct = (product: Product, price: number, variantName: string): Product & { variantLabel: string } => {
    return {
      ...product,
      id: product.id * 1000 + (price === product.price ? 1 : 2),
      name: product.name,
      price: price,
      price2: undefined,
      priceType: undefined,
      variantLabel: variantName // <--- aquí
    };
  };

  const getCartItem = (productId: number) => {
    return cart.find(item => item.id === productId);
  };

  const renderProductButton = (product: Product & { variantLabel?: string }, colorClassOverride?: string) => {
    const cartItem = getCartItem(product.id);
    const isPromo = section.key === "promociones";
    const colorClass = colorClassOverride || "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400";
    const qty = cartItem ? cartItem.qty : 0;

    // Si es promoción y NO es miércoles, solo muestra el mensaje
    if (isPromo && !isWednesday) {
      return (
        <div className="text-xs text-red-400 mt-2 font-bold">
          Solo disponible los miércoles
        </div>
      );
    }

    // Botón igual para todos (incluyendo promociones)
    if (cartItem) {
      return (
        <div className={`flex-1 bg-gradient-to-r ${colorClass} text-black px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-between text-sm md:text-base`}>
          <span>AGREGAR</span>
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => onUpdateCart(product.id, cartItem.qty - 1)}
              className="w-6 h-6 md:w-7 md:h-7 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center text-sm"
            >
              -
            </button>
            <span className="w-6 md:w-8 text-center font-bold">{cartItem.qty}</span>
            <button
              onClick={() => onUpdateCart(product.id, cartItem.qty + 1)}
              className="w-6 h-6 md:w-7 md:h-7 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center text-sm"
            >
              +
            </button>
          </div>
        </div>
      );
    }

    return (
      <button
        onClick={() =>
          onAddToCart({
            ...product,
            promo: isPromo,
            name: product.name,
          })
        }
        className={`flex-1 bg-gradient-to-r ${colorClass} text-black px-3 py-2 md:px-4 md:py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105 flex items-center justify-between text-sm md:text-base`}
      >
        <span>
          {product.variantLabel ? product.variantLabel : "AGREGAR"}
        </span>
        <div className="flex items-center gap-1 md:gap-2">
          <span>${product.price}</span>
          <span className="text-lg leading-none">+</span>
        </div>
      </button>
    );
  };

  const isWednesday = new Date().getDay() === 3; // 0=Domingo, 1=Lunes, ..., 3=Miércoles

  const getVariantColor = (variant: string) => {
    switch (variant) {
      case "ORDEN":
      case "C/CARNE":
      case "KILO":
      case "GRANDE":
        return "from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400";
      case "MEDIA":
      case "NATURAL":
      case "MEDIO":
      case "CHICA":
        return "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400";
      default:
        return "from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400";
    }
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
                    {renderProductButton(
                      createVariantProduct(
                        product,
                        product.price,
                        getPriceLabels(product.priceType).label1
                      ),
                      getVariantColor(getPriceLabels(product.priceType).label1)
                    )}
                    {renderProductButton(
                      createVariantProduct(
                        product,
                        product.price2,
                        getPriceLabels(product.priceType).label2
                      ),
                      getVariantColor(getPriceLabels(product.priceType).label2)
                    )}
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

      {/* Modal de extras solo para papas */}
      {showExtrasModal && selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative bg-black p-6 rounded-lg shadow-lg w-full max-w-md z-10">
            {/* Botón de cerrar */}
            <button
              onClick={closeExtrasModal}
              className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-amber-400 font-bold focus:outline-none"
              aria-label="Cerrar"
              type="button"
            >
              ×
            </button>
            <h3 className="font-bold mb-4 text-lg text-amber-500">{selectedProduct.name}</h3>

            {/* Papa Mixto: Selección de 2 carnes */}
            {selectedProduct.selectType === "mixto" && (
              <div className="mb-4">
                <div className="font-semibold mb-2">Elige 2 tipos de carne:</div>
                {carnes.map(carne => (
                  <label key={carne} className="flex items-center mb-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={mixtoCarnes.includes(carne)}
                      onChange={() => {
                        if (mixtoCarnes.includes(carne)) {
                          setMixtoCarnes(mixtoCarnes.filter(c => c !== carne));
                        } else if (mixtoCarnes.length < 2) {
                          setMixtoCarnes([...mixtoCarnes, carne]);
                        }
                      }}
                      disabled={!mixtoCarnes.includes(carne) && mixtoCarnes.length >= 2}
                      className="accent-amber-500 w-5 h-5"
                    />
                    <span className="ml-2">{carne}</span>
                  </label>
                ))}
                {mixtoCarnes.length !== 2 && (
                  <div className="text-xs text-red-500 mt-1">Selecciona exactamente 2 carnes.</div>
                )}
              </div>
            )}

            {/* Papa Especial: Selección de especialidad */}
            {selectedProduct.selectType === "especial" && (
              <div className="mb-4">
                <div className="font-semibold mb-2">Elige una especialidad:</div>
                <select
                  value={especialidad}
                  onChange={e => setEspecialidad(e.target.value)}
                  className="w-full border bg-black border-amber-400 rounded px-2 py-1"
                >
                  <option value="">Selecciona una especialidad</option>
                  {especialidades.map(esp => (
                    <option key={esp} value={esp}>{esp}</option>
                  ))}
                </select>
                {!especialidad && (
                  <div className="text-xs text-red-500 mt-1">Selecciona una especialidad.</div>
                )}
              </div>
            )}

            <div className="mb-4">
              <label className="flex items-center mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sinExtra}
                  onChange={handleSinExtra}
                  className="accent-amber-500 w-5 h-5"
                />
                <span className="ml-2 text-base">Sin extra</span>
              </label>
              {!sinExtra && selectedProduct.extras?.map(extra => (
                <label key={extra.key} className="flex items-center mb-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.key)}
                    onChange={() => handleExtraChange(extra.key)}
                    className="accent-amber-500 w-5 h-5"
                  />
                  <span className="ml-2 text-base">{extra.name} <span className="text-amber-600 font-semibold">+${extra.price}</span></span>
                </label>
              ))}
            </div>
            {(sinExtra || selectedExtras.length > 0) && (
              <>
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <button
                      onClick={() => setCantidad(Math.max(1, cantidad - 1))}
                      className="w-6 h-6 md:w-7 md:h-7 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center text-sm"
                      type="button"
                    >
                      -
                    </button>
                    <span className="w-6 md:w-8 text-center font-bold text-white">{cantidad}</span>
                    <button
                      onClick={() => setCantidad(cantidad + 1)}
                      className="w-6 h-6 md:w-7 md:h-7 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 flex items-center justify-center text-sm"
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-bold text-amber-600 text-lg">
                    Total: $
                    {(
                      (selectedProduct.price +
                        (sinExtra
                          ? 0
                          : selectedProduct.extras
                              ?.filter(e => selectedExtras.includes(e.key))
                              .reduce((acc, e) => acc + e.price, 0) || 0)
                      ) * cantidad
                    ).toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={addToCartWithExtras}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                    disabled={
                      (selectedProduct.selectType === "mixto" && mixtoCarnes.length !== 2) ||
                      (selectedProduct.selectType === "especial" && !especialidad)
                    }
                  >
                    Añadir al carrito
                  </button>
                  <button
                    onClick={closeExtrasModal}
                    className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-bold hover:bg-gray-300 transition-all duration-300"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
            {(!sinExtra && selectedExtras.length === 0) && (
              <div className="text-sm text-gray-500 mt-2 text-center">
                Selecciona "Sin extra" o al menos un extra para continuar.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
