
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from "../data/menuData";

type Section = {
  key: string;
  title: string;
  color: string;
  products: Product[];
};

// Las props reciben las secciones del menú y el handler para agregar al carrito
type Props = {
  sections: Section[];
  enableAdd: boolean;
  onAdd: (product: Product) => void;
};

const MenuTabs = ({ sections, enableAdd, onAdd }: Props) => (
  <Tabs defaultValue={sections[0].key} className="w-full">
    <TabsList className="w-full flex overflow-x-auto bg-black/80 border-b-2 border-yellow-400 rounded-none p-0">
      {sections.map((section) => (
        <TabsTrigger
          key={section.key}
          value={section.key}
          className={`text-lg font-bold px-4 py-3 rounded-none transition-colors
            data-[state=active]:text-yellow-400 data-[state=active]:border-b-4
            ${section.color} text-white flex-shrink-0 uppercase`}
          style={{ letterSpacing: "1px" }}
        >
          {section.title}
        </TabsTrigger>
      ))}
    </TabsList>
    <div className="mt-3">
      {sections.map((section) => (
        <TabsContent key={section.key} value={section.key}>
          <div className="grid gap-4">
            {section.products.map((product) => (
              <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-white font-medium">{product.name}</h3>
                {product.desc && <p className="text-gray-400 text-sm mt-1">{product.desc}</p>}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-amber-400 font-bold">${product.price}</span>
                  {enableAdd && (
                    <button 
                      className="bg-amber-500 text-black px-3 py-1 rounded-full font-medium hover:bg-amber-600 transition"
                      onClick={() => onAdd(product)}
                    >
                      Agregar
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </div>
  </Tabs>
);

export default MenuTabs;
