
import { useState } from "react";
import { CartItem } from "../data/menuData";
import { sendWhatsappOrder } from "../utils/whatsapp";

type Props = {
  cart: CartItem[];
  onCancel: () => void;
  onSent: () => void;
};

const initialForm = {
  nombre: "",
  telefono: "",
  direccion: "",
  tipo: "recoger", // o "domicilio"
};

const OrderForm = ({ cart, onCancel, onSent }: Props) => {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = async () => {
    setError("");
    if (!form.nombre || !form.telefono || (form.tipo === "domicilio" && !form.direccion)) {
      setError("Por favor llena todos los campos requeridos.");
      return;
    }
    setSending(true);
    try {
      sendWhatsappOrder(cart, form);
      setTimeout(() => {
        setSending(false);
        onSent();
      }, 300); // Simula tiempo de envío
    } catch (e) {
      setSending(false);
      setError("Error al enviar. Intenta de nuevo.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 animate-fade-in">
      <div className="bg-[#191919] border-4 border-yellow-400 rounded-2xl p-8 w-full max-w-md shadow-2xl relative">
        <button className="absolute right-4 top-4 text-yellow-300 text-2xl font-bold" onClick={onCancel}>×</button>
        <h2 className="text-2xl font-bold mb-5 text-white">Finalizar Orden</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="nombre">
              Nombre completo
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:ring-yellow-400 outline-none"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="telefono">
              Teléfono
            </label>
            <input
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:ring-yellow-400 outline-none"
              id="telefono"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1" htmlFor="tipo">
              Tipo de entrega
            </label>
            <select
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:ring-yellow-400 outline-none"
              id="tipo"
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
            >
              <option value="recoger">Para recoger</option>
              <option value="domicilio">A domicilio</option>
            </select>
          </div>
          {form.tipo === "domicilio" && (
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="direccion">
                Dirección para entrega
              </label>
              <input
                className="w-full px-3 py-2 rounded bg-black text-white border border-gray-600 focus:ring-yellow-400 outline-none"
                id="direccion"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </form>
        <div className="text-red-400 mt-2 min-h-[22px]">{error}</div>
        <button
          className="bg-gradient-to-r from-yellow-400 to-red-400 w-full py-3 rounded-full mt-4 text-black font-extrabold text-lg shadow-lg hover:scale-105 transition-transform"
          onClick={handleSend}
          disabled={sending}
        >
          {sending ? "Enviando..." : "Enviar orden por WhatsApp"}
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
