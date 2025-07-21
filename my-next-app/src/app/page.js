"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const products = [
    {
      id: 1,
      name: "Instant handoh",
      image: "/file_00000000d3c0622fa25504a47dbe12ec.png",
      description: (
        <>
          <p className="text-2xl">🍚 <span className="font-bold">Rooted in Tradition</span></p>
          <p className="mt-2">
            Inspired by the beloved Assamese food “handoh” (সান্দহ), a fermented rice dish with generations of cultural value.
          </p>
          <p className="text-2xl mt-4">💡 <span className="font-bold">The Answer</span></p>
          <p className="mt-2">
            Instant handoh — a 2-minute tradition in a cup, like Maggi, but proudly Axomiya.
          </p>
        </>
      ),
      price: "₹45/cup",
    },
    {
      id: 2,
      name: "Pithaguri",
      image: "/file_00000000d4a0622f8617abea7030b8d5 (1).png",
      description: (
        <>
          <p className="text-2xl">🌾 <span className="font-bold">What is Pithaguri (পিঠাগুৰি)?</span></p>
          <p className="mt-2">
            Roasted rice powder, used in traditional breakfasts. Mixed with milk, curd, or water and jaggery or salt. Light yet filling—used in rural households for decades.
          </p>
          <p className="text-2xl mt-4">⏱️ <span className="font-bold">Instant Format</span></p>
          <p className="mt-2">
            Add water or milk, stir in flavored sachet (gur-ghee or spicy), done!
          </p>
        </>
      ),
      price: "₹45/cup",
    },
    {
      id: 3,
      name: "Kol Khar",
      image: "/file_000000009ad461f8ae9c59c0a3850e64.png",
      description: (
        <div className="flex space-x-8">
          <div>
            <p className="text-2xl">🍌 <span className="font-bold">Origin & Essence</span></p>
            <ul className="list-disc list-inside mt-2">
              <li>Extracted from sun-dried banana peels</li>
              <li>Traditional alkaline filtration</li>
              <li>Unique to Assamese cuisine</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl">🎉 <span className="font-bold">Cultural Significance</span></p>
            <ul className="list-disc list-inside mt-2">
              <li>Used in first-course of meals</li>
              <li>Symbol of purity</li>
              <li>Represents Assamese identity</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl">🌿 <span className="font-bold">Medicinal Value</span></p>
            <ul className="list-disc list-inside mt-2">
              <li>Aids Digestion</li>
              <li>Natural Alkalizer</li>
              <li>Detoxifying Properties</li>
            </ul>
          </div>
        </div>
      ),
      price: "₹105",
    },
  ];

  const testimonials = [
    {
      name: "Anjali Das",
      comment: "This is just like my mother used to make! A true taste of home.",
      image: "/file_00000000d3c0622fa25504a47dbe12ec.png",
    },
    {
      name: "Rohan Borah",
      comment: "I can't believe it's so easy to make. Perfect for my busy mornings.",
      image: "/file_00000000d4a0622f8617abea7030b8d5 (1).png",
    },
    {
      name: "Priya Sharma",
      comment: "A must-try for anyone who loves Assamese food. Highly recommended!",
      image: "/file_000000009ad461f8ae9c59c0a3850e64.png",
    },
  ];

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

  const cartCount = Object.values(cart).reduce((acc, count) => acc + count, 0);

  return (
    <div className="min-h-screen bg-[#F8F0E3] relative">
      <div className="absolute top-0 left-0 h-full w-16 md:w-32 bg-repeat-y opacity-50 md:opacity-100" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')"}}></div>
      <div className="absolute top-0 right-0 h-full w-16 md:w-32 bg-repeat-y opacity-50 md:opacity-100" style={{backgroundImage: "url('/Screenshot 2025-07-20 111526.png')", transform: "rotate(180deg)"}}></div>
      
      <div className="relative z-10">
        <header className="sticky top-0 z-50 bg-[#EADDCA] shadow-md py-4 px-4 md:px-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/WhatsApp Image 2025-07-20 at 10.02.00_834754b0.jpg"
                alt="Instant Axomiya Logo"
                width={50}
                height={50}
                className="md:w-[60px] md:h-[60px]"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 ml-3 md:ml-4">
                Instant Axomiya
              </h1>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              <Link href="/cart" className="relative">
                <svg className="h-7 w-7 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-800 hover:text-black"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center">
              <a href="#home" className="text-xl text-gray-800 hover:text-black mx-6">Home</a>
              <a href="#products" className="text-xl text-gray-800 hover:text-black mx-6">Products</a>
              <a href="#contact" className="text-xl text-gray-800 hover:text-black mx-6">Contact</a>
              <Link href="/cart" className="relative">
                <svg className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </nav>
          </div>

          {/* Mobile navigation menu */}
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
            <nav className="flex flex-col space-y-3">
              <a href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-800 hover:text-black px-4 py-2 hover:bg-[#F8F0E3] rounded transition-colors">
                Home
              </a>
              <a href="#products" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-800 hover:text-black px-4 py-2 hover:bg-[#F8F0E3] rounded transition-colors">
                Products
              </a>
              <a href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg text-gray-800 hover:text-black px-4 py-2 hover:bg-[#F8F0E3] rounded transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main>
          <div id="home" className="h-screen flex flex-col items-center justify-center text-center">
            <div className="bg-white bg-opacity-75 p-12 rounded-lg shadow-lg">
              <h2 className="text-7xl font-bold text-gray-800">Assam in a Cup</h2>
              <p className="text-3xl text-gray-600 mt-6">
                Bringing Assam's traditional breakfast to the modern world –
                instantly!
              </p>
              <div className="mt-12">
                <h3 className="text-5xl font-bold text-gray-800">
                  Instant Axomiya in a Cup
                </h3>
                <div className="flex flex-col items-center space-y-4 mt-8 text-3xl text-gray-700">
                  <p>💧 Add hot water</p>
                  <p>⏳ Wait 2–3 minutes</p>
                  <p>🥄 Stir, enjoy!</p>
                </div>
              </div>
            </div>
          </div>

          <div id="products" className="container mx-auto px-4 md:px-8 py-24 space-y-12 md:space-y-24">
            {products.map((product) => (
              <div
                key={product.id}
                className={`md:flex md:flex-row items-center justify-center ${
                  product.id % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-0 bg-white md:bg-transparent p-6 md:p-0 rounded-lg shadow-lg md:shadow-none`}
              >
                <div className="w-full md:w-1/3">
                  <div className="relative h-64 md:h-96">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full md:w-2/3 px-4 md:px-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
                    {product.name}
                  </h3>
                  <div className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg">
                    {product.description}
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-4 md:mt-6 text-center md:text-left">
                    {product.price}
                  </p>
                  <div className="mt-8">
                    {!cart[product.id] ? (
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition-colors text-xl"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-stretch bg-gray-100 rounded-full overflow-hidden shadow-md mx-auto w-fit">
                        <button 
                          onClick={() => updateQuantity(product.id, cart[product.id] - 1)} 
                          className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                        >
                          −
                        </button>
                        <div className="flex items-center justify-center bg-white px-6 min-w-[4rem]">
                          <span className="text-gray-800 font-bold text-lg">
                            {cart[product.id]}
                          </span>
                        </div>
                        <button 
                          onClick={() => updateQuantity(product.id, cart[product.id] + 1)} 
                          className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container mx-auto px-8 py-24">
            <h2 className="text-5xl font-bold text-center text-gray-800">
              Testimonials
            </h2>
            <h3 className="text-3xl text-center text-gray-600 mt-2">
              Test of Home
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="relative h-24 w-24 mx-auto mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="100px"
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 mt-2">"{testimonial.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </main>

        <footer id="contact" className="bg-[#EADDCA] text-gray-800 py-12">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Contact Us</h3>
            <div className="flex flex-col items-center max-w-4xl mx-auto mb-8">
              <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-2xl">
                <a href="tel:7002252161" className="flex flex-col items-center hover:scale-105 transition-transform">
                  <Image src="/telephone.png" alt="Phone" width={40} height={40} className="mb-2" />
                  <span>7002252161</span>
                </a>
                <a href="mailto:instantaxomiya@gmail.com" className="flex flex-col items-center hover:scale-105 transition-transform">
                  <Image src="/email.png" alt="Email" width={40} height={40} className="mb-2" />
                  <span>instantaxomiya@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/instantaxomiya?igsh=MWV6emR4djB2Mm9sNg==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
                  <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="mb-2" />
                  <span>Instagram</span>
                </a>
                <a href="https://wa.me/7002252161" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-105 transition-transform">
                  <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} className="mb-2" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="flex flex-col items-center justify-center bg-white bg-opacity-50 rounded-lg p-6 w-full max-w-md">
                <h4 className="text-xl font-semibold mb-4">Visit Us</h4>
                <a href="https://share.google/Rkjy7Ngz1tsgCxpBa" target="_blank" rel="noopener noreferrer" className="text-center hover:text-gray-600">
                  <p>DHSK</p>
                  <p>Dibrugarh</p>
                  <p>Assam</p>
                </a>
              </div>
            </div>
            <p className="text-center">&copy; 2025 Instant Axomiya. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
