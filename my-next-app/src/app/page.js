import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Instant Xandoh",
      image: "/file_00000000d3c0622fa25504a47dbe12ec.png",
      description: (
        <>
          <p className="text-2xl">🍚 <span className="font-bold">Rooted in Tradition</span></p>
          <p className="mt-2">
            Inspired by the beloved Assamese food “Xandoh” (সান্দহ), a fermented rice dish with generations of cultural value.
          </p>
          <p className="text-2xl mt-4">💡 <span className="font-bold">The Answer</span></p>
          <p className="mt-2">
            Instant Xandoh — a 2-minute tradition in a cup, like Maggi, but proudly Axomiya.
          </p>
        </>
      ),
      price: "₹60/cup",
    },
    {
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
      price: "₹245/20 tea bags 40g",
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

  return (
    <div id="home" className="min-h-screen bg-[#F8F0E3]">
      <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/WhatsApp Image 2025-07-20 at 10.02.00_834754b0.jpg"
              alt="Instant Axomiya Logo"
              width={60}
              height={60}
            />
            <h1 className="text-3xl font-bold text-gray-800 ml-4">
              Instant Axomiya
            </h1>
          </div>
          <nav>
            <a href="#home" className="text-xl text-gray-600 hover:text-gray-800 mx-6">Home</a>
            <a href="#products" className="text-xl text-gray-600 hover:text-gray-800 mx-6">Products</a>
            <a href="#contact" className="text-xl text-gray-600 hover:text-gray-800 mx-6">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-8">
        <div className="h-screen flex flex-col justify-center items-center text-center">
          <h2 className="text-7xl font-bold text-gray-800">Assam in a Cup</h2>
          <p className="text-3xl text-gray-600 mt-6">
            Bringing Assam's traditional breakfast to the modern world –
            instantly!
          </p>
          <div className="mt-16 bg-white p-12 rounded-lg shadow-lg">
            <h3 className="text-4xl font-bold text-gray-800">
              Instant Axomiya in a Cup
            </h3>
            <div className="flex flex-col items-center space-y-4 mt-8 text-2xl text-gray-700">
              <p>💧 Add hot water</p>
              <p>⏳ Wait 2–3 minutes</p>
              <p>🥄 Stir, enjoy!</p>
            </div>
          </div>
        </div>

        <div id="products" className="space-y-24 py-24">
          {products.map((product, index) => (
            <div
              key={index}
              className={`flex items-center justify-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="w-1/3">
                <div className="relative h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-2/3 px-12">
                <h3 className="text-4xl font-bold text-gray-800">
                  {product.name}
                </h3>
                <div className="text-gray-600 mt-6 text-lg">
                  {product.description}
                </div>
                <p className="text-3xl font-bold text-gray-800 mt-6">
                  {product.price}
                </p>
                <button className="mt-8 bg-red-500 text-white py-3 px-8 rounded-full hover:bg-red-600 transition-colors text-xl">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="my-24">
          <h2 className="text-5xl font-bold text-center text-gray-800">
            Testimonials
          </h2>
          <h3 className="text-3xl text-center text-gray-600 mt-2">
            Taste of Home
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

      <footer id="contact" className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Instant Axomiya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
