
import { CartItem } from "../data/menuData";

type Datos = {
  nombre: string;
  telefono: string;
  calle?: string;
  numero?: string;
  colonia?: string;
  tipo: string;
};

const NUMERO_WHATSAPP = "523148728911"; // Número actualizado de la taquería

export function sendWhatsappOrder(cart: CartItem[], datos: Datos) {
  const productos = cart
    .map((item) => {
      let productoTexto = `• ${item.qty}x ${item.name} - $${item.price * item.qty}`;
      if (item.observations && item.observations.trim()) {
        productoTexto += `%0A  _Nota: ${item.observations.trim()}_`;
      }
      return productoTexto;
    })
    .join("%0A");
    
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  let msg = `🌮 *COLIMAS TAQUERIA y PAPAS*%0A`;
  msg += `─────────────────%0A%0A`;
  
  msg += `*CLIENTE*%0A`;
  msg += `Nombre: ${datos.nombre}%0A`;
  msg += `Tel: ${datos.telefono}%0A`;
  msg += `Tipo: ${datos.tipo === "recoger" ? "Para Recoger" : "A Domicilio"}%0A`;

  if (datos.tipo === "domicilio" && datos.calle && datos.numero && datos.colonia) {
    msg += `Dirección: ${datos.calle} ${datos.numero}, Col. ${datos.colonia}%0A`;
  }

  msg += `%0A*PEDIDO*%0A`;
  msg += `${productos}%0A%0A`;
  msg += `*TOTAL: $${total}*%0A`;
  msg += `─────────────────%0A`;
  msg += `¡Gracias por tu pedido!%0A`;
  msg += `El servicio a domicilio no va incluido en el precio, por favor paga al repartidor.`;

  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${msg}`;
  window.open(url, "_blank");
}
