
import { X } from "lucide-react";
import { MenuSection } from "../data/menuData";

type Props = {
  sections: MenuSection[];
  selectedCategory: string;
  onCategorySelect: (key: string) => void;
  isOpen: boolean;
  onClose: () => void;
};

const SidebarMenu = ({ sections, selectedCategory, onCategorySelect, isOpen, onClose }: Props) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-20 h-[calc(100vh-5rem)] w-80 bg-gradient-to-b from-gray-900 to-black border-r border-amber-500/20 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-lg font-extralight tracking-widest text-amber-400 mb-8 border-b border-amber-500/20 pb-4">
            MENÚ
          </h2>
          
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => onCategorySelect(section.key)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                  selectedCategory === section.key
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30'
                    : 'hover:bg-gray-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-2xl transition-transform duration-300 ${
                    selectedCategory === section.key ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    {section.icon}
                  </span>
                  <div>
                    <h3 className={`font-light tracking-wide transition-colors duration-300 ${
                      selectedCategory === section.key 
                        ? 'text-amber-400' 
                        : 'text-white group-hover:text-amber-300'
                    }`}>
                      {section.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {section.products.length} productos
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed left-0 top-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black border-r border-amber-500/20 overflow-y-auto z-40 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 border-b border-amber-500/20 pb-4">
            <h2 className="text-lg font-extralight tracking-widest text-amber-400">
              MENÚ
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => {
                  onCategorySelect(section.key);
                  onClose();
                }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                  selectedCategory === section.key
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30'
                    : 'hover:bg-gray-800/50 border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className={`text-2xl transition-transform duration-300 ${
                    selectedCategory === section.key ? 'scale-110' : 'group-hover:scale-105'
                  }`}>
                    {section.icon}
                  </span>
                  <div>
                    <h3 className={`font-light tracking-wide transition-colors duration-300 ${
                      selectedCategory === section.key 
                        ? 'text-amber-400' 
                        : 'text-white group-hover:text-amber-300'
                    }`}>
                      {section.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {section.products.length} productos
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SidebarMenu;
