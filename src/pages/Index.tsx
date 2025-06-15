import { useState } from "react";
import { MENU } from "../data/menuData";
import { useCart } from "../hooks/useCart";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import ProductGrid from "../components/ProductGrid";
import OrderDrawer from "../components/OrderDrawer";
import Footer from "../components/Footer";
import WelcomeBanner from "../components/WelcomeBanner";

const Index = () => {
  const { cart, addToCart, updateCart, updateCartObservations, emptyCart } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(MENU[0].key);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentSection = MENU.find(section => section.key === selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-black text-white font-light">
        <Header
          cart={cart}
          onCartClick={() => setDrawerOpen(true)}
          onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        <div className="flex pt-20">
          <SidebarMenu
            sections={MENU}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <main className="flex-1 lg:ml-80 p-8">
            <WelcomeBanner />
            {currentSection && (
              <ProductGrid
                section={currentSection}
                cart={cart}
                onAddToCart={addToCart}
                onUpdateCart={updateCart}
              />
            )}
          </main>
        </div>

        <OrderDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          cart={cart}
          updateCart={updateCart}
          updateCartObservations={updateCartObservations}
          emptyCart={emptyCart}
        />

        <div className=" bg-black ">
          <Footer />
        </div>
      </div>

    </>
  );
};

export default Index;
