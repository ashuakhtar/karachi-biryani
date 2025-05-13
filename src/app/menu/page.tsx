"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const menuItems = [
  {
    id: 1,
    category: "Biryani",
    items: [
      {
        id: 1,
        name: "Special Biryani",
        price: 12.99,
        description:
          "Our signature biryani with premium basmati rice and special spices",
        image: "/images/special-biryani.jpg",
      },
      {
        id: 2,
        name: "Chicken Biryani",
        price: 10.99,
        description: "Classic chicken biryani with aromatic spices",
        image: "/images/chicken-biryani.jpg",
      },
      {
        id: 3,
        name: "Beef Biryani",
        price: 11.99,
        description: "Tender beef biryani with traditional spices",
        image: "/images/beef-biryani.jpg",
      },
    ],
  },
  {
    id: 2,
    category: "Appetizers",
    items: [
      {
        id: 4,
        name: "Pakoras",
        price: 5.99,
        description: "Crispy vegetable fritters served with chutney",
        image: "/images/pakoras.jpg",
      },
      {
        id: 5,
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems
              .find((category) => category.category === activeCategory)
              ?.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600">
                    {/* Placeholder for item image */}
                    <div className="h-full flex items-center justify-center text-white text-xl font-bold">
                      {item.name}
                    </div>
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
