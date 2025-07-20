"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Instant Xandoh",
    image: "/file_00000000d3c0622fa25504a47dbe12ec.png",
    price: 60,
  },
  {
    id: 2,
    name: "Pithaguri",
    image: "/file_00000000d4a0622f8617abea7030b8d5 (1).png",
    price: 45,
  },
  {
    id: 3,
    name: "Kol Khar",
    image: "/file_000000009ad461f8ae9c59c0a3850e64.png",
    price: 245,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      const newCart = { ...cart };
      delete newCart[productId];
      setCart(newCart);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [productId]: newQuantity,
      }));
    }
  };

  const cartItems = Object.keys(cart).map((productId) => {
    const product = products.find((p) => p.id === parseInt(productId));
    return {
      ...product,
      quantity: cart[productId],
    };
  });

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#F8F0E3] relative">
      <div className="hidden md:block absolute top-0 left-0 h-full w-32 bg-repeat-y" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')"}}></div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-32 bg-repeat-y" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')", transform: "rotate(180deg)"}}></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-center text-gray-600">Your cart is currently empty.</p>
            <div className="text-center mt-8">
              <Link href="/" className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition-colors text-xl">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center border-b py-4 space-y-4 sm:space-y-0 sm:justify-between">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={60} height={60} className="object-contain" />
                  <div className="ml-4">
                    <p className="font-bold text-lg text-black">{item.name}</p>
                    <p className="text-black text-sm">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
                  <div className="flex items-center bg-gray-100 rounded-full overflow-hidden shadow-md mx-4">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 text-2xl font-bold focus:outline-none active:bg-gray-400 touch-manipulation"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 bg-white text-gray-800 font-bold text-lg min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 text-2xl font-bold focus:outline-none active:bg-gray-400 touch-manipulation"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-bold text-black text-lg sm:ml-4 min-w-[80px] text-right">₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="text-right mt-8">
              <p className="text-2xl font-bold text-black">Total: ₹{total}</p>
              <Link href="/payment">
                <button className="mt-4 bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-colors text-xl">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
