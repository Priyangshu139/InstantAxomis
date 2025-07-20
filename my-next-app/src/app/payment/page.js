"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const products = [
  {
    id: 1,
    name: "Instant Xandoh",
    price: 60,
  },
  {
    id: 2,
    name: "Pithaguri",
    price: 45,
  },
  {
    id: 3,
    name: "Kol Khar",
    price: 245,
  },
];

export default function PaymentPage() {
  const [phone, setPhone] = useState('');
  const [showQR, setShowQR] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

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

  const transactionNote = cartItems.map(item => `${item.name} x${item.quantity}`).join(', ');

  const upiLink = `upi://pay?pa=rupampaul719@okicici&pn=Lupam%20Paul&am=${total}&cu=INR&tn=${phone},${transactionNote}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setShowQR(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F0E3] relative">
      <div className="hidden md:block absolute top-0 left-0 h-full w-32 bg-repeat-y" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')"}}></div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-32 bg-repeat-y" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')", transform: "rotate(180deg)"}}></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Lupam Pay</h1>
        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <div className="border-b pb-6 mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
              <div className="mt-4 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-800">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-gray-900">₹{item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-lg text-gray-900">
                <p>Subtotal</p>
                <p>₹{total}</p>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <p>Total</p>
                <p>₹{total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            {!showQR ? (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-semibold text-gray-800">Payment Details</h2>
                  <div className="flex items-center gap-2">
                    <img src="/window.svg" alt="secure" className="w-5 h-5" />
                    <span className="text-sm text-gray-500">Secure Payment</span>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">+91</span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="block w-full pl-12 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Enter your phone number"
                        required
                        pattern="[0-9]{10}"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium text-lg"
                  >
                    <span>Continue to Pay</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Scan QR Code to Pay</h2>
                <div className="bg-gray-50 p-6 rounded-lg inline-block mb-6">
                  <QRCodeCanvas value={upiLink} size={256} />
                </div>
                <div className="space-y-3 text-left bg-gray-50 p-4 rounded-lg">
                  <p className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">+91 {phone}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">₹{total}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="font-medium">Order Items:</span><br />
                    {transactionNote}
                  </p>
                </div>
                <div className="mt-8 flex gap-4">
                  <Link href="/" className="flex-1">
                    <button className="w-full bg-gray-100 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors text-base font-medium">
                      Cancel
                    </button>
                  </Link>
                  <Link href="/" className="flex-1">
                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors text-base font-medium">
                      Done
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
