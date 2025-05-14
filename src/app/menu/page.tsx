"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const menuItems = [
  {
    id: 1,
    category: "Biryani",
    items: [
      {
        id: 1,
        name: "Vegetable Biryani",
        price: 9.99,
        description:
          "Aromatic basmati rice cooked with fresh vegetables and traditional spices.",
        image: "/images/vegetable-biryani.png",
      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 9.99,
        description:
          "Tender chicken pieces layered with fragrant basmati rice and house spices.",
        image: "/images/chicken-biryani.png",
      },
      {
        id: 3,
        name: "Beef Biryani",
        price: 9.99,
        description:
          "Succulent beef simmered with basmati rice and bold Karachi spices.",
        image: "/images/beef-biryani.png",
      },
    ],
  },
  {
    id: 2,
    category: "Curry",
    items: [
      {
        id: 4,
        name: "Masala Butter Chicken",
        price: 9.99,
        description:
          "Creamy, rich butter chicken with a blend of aromatic spices and tomato gravy.",
        image: "/images/masala-butter-chicken.png",
      },
    ],
  },
  {
    id: 3,
    category: "Appetizers",
    items: [
      {
        id: 6,
        name: "Pakoras",
        price: 5.99,
        description: "Crispy vegetable fritters served with chutney",
        image: "/images/pakoras.jpg",
      },
      {
        id: 7,
        name: "Samosa",
        price: 4.99,
        description: "Spiced potato and peas filled pastry",
        image: "/images/samosa.jpg",
      },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(menuItems[0].category);

  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
            Our Menu
          </h1>

          {/* Category Navigation */}
          <div className="flex justify-center space-x-4 mb-8">
            {menuItems.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.category)}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category.category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div
            className={
              activeCategory === "Curry" || activeCategory === "Appetizers"
                ? "flex flex-row justify-center gap-8 flex-wrap"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            }
          >
            {menuItems
              .find((category) => category.category === activeCategory)
              ?.items.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 max-w-xs`}
                >
                  <div className="relative w-full h-48 bg-gray-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={item.id === 2} // Prioritize loading chicken biryani image
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">
                        ${item.price}
                      </span>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
