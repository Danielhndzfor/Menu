
import { Drawer } from "@/components/ui/drawer";
import React from "react";
import { Product } from "../data/menuData";

type Props = {
  open: boolean;
  category: { key: string; title: string; products: Product[] } | null;
  onClose: () => void;
  onAdd: (p: Product) => void;
};

const COLORS: Record<string, string> = {
  tacos: "bg-black border-t-4 border-tiffany",
  volcanes: "bg-black border-t-4 border-amber-400",
  pellizcada: "bg-black border-t-4 border-pink-400",
  papas: "bg-black border-t-4 border-orange-400",
  quesos: "bg-black border-t-4 border-yellow-300",
  especialidades: "bg-black border-t-4 border-red-400",
  ordenes: "bg-black border-t-4 border-purple-400",
  kilos: "bg-black border-t-4 border-lime-400",
  parrilladas: "bg-black border-t-4 border-cyan-400",
  extras: "bg-black border-t-4 border-gray-600",
  bebidas: "bg-black border-t-4 border-blue-400",
};

const CategoryPanel = ({ open, category, onClose, onAdd }: Props) => {
  if (!open || !category) return null;
  const color = COLORS[category.key] || "bg-black border-t-4 border-tiffany";
  return (
    <Drawer open={open} onClose={onClose}>
      <div className={`max-w-md rounded-none flex flex-col h-full ${color}`}>
        <div className="flex justify-between items-center p-6 pb-4">
          <h2 className="text-3xl font-extrabold text-amber-400">{category.title}</h2>
          <button 
            className="text-lg px-3 py-1 rounded-full bg-amber-400 text-black hover:bg-amber-400/80 transition font-bold" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-8 flex flex-col gap-3">
          {category.products.map((prod) => (
            <div key={prod.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-white font-medium">{prod.name}</h3>
              {prod.desc && <p className="text-gray-400 text-sm mt-1">{prod.desc}</p>}
              <div className="flex justify-between items-center mt-3">
                <span className="text-amber-400 font-bold">${prod.price}</span>
                <button 
                  className="bg-amber-500 text-black px-3 py-1 rounded-full font-medium hover:bg-amber-600 transition"
                  onClick={() => onAdd(prod)}
                >
                  Agregar
                </button>
              </div>
            </div>
          ))}
          {category.products.length === 0 && (
            <div className="text-center text-xl font-medium text-gray-400 mt-16">
              No hay productos disponibles en esta categoría.
            </div>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default CategoryPanel;
