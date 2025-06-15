
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import React from "react";

const SocialBar = () => (
  <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
    <a href="https://wa.me/527771234567" target="_blank" rel="noopener noreferrer"
      className="bg-tiffany hover:bg-tiffany/80 transition p-3 rounded-full flex items-center shadow-2xl group border-2 border-tiffany"
      title="WhatsApp"
      style={{ boxShadow: "0 0 15px #1de9b6" }}>
      <MessageCircle className="w-6 h-6 text-black" />
      <span className="ml-2 font-semibold text-black text-lg hidden md:inline">WhatsApp</span>
    </a>
    <a href="tel:7771234567"
      className="bg-gray-800 hover:bg-gray-700 transition p-3 rounded-full flex items-center shadow-2xl group border-2 border-gray-600"
      title="Llámanos">
      <Phone className="w-6 h-6 text-tiffany" />
      <span className="ml-2 font-semibold text-tiffany text-lg hidden md:inline">
        777 123 4567
      </span>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 transition p-3 rounded-full flex items-center shadow-2xl group border-2 border-pink-400"
      title="Instagram">
      <Instagram className="w-6 h-6 text-pink-400" />
    </a>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-gray-700 transition p-3 rounded-full flex items-center shadow-2xl group border-2 border-blue-400"
      title="Facebook">
      <Facebook className="w-6 h-6 text-blue-400" />
    </a>
  </div>
);

export default SocialBar;
