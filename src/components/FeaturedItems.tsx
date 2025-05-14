import Link from "next/link";

const featuredItems = [
  {
    id: 1,
    title: "Vegetable Biryani",
    price: "9.99",
    description:
      "Our signature biryani with premium basmati rice and special spices",
  },
  {
    id: 2,
    title: "Chicken Biryani",
    price: "9.99",
    description: "Perfect for family gatherings with extra portions",
  },
  {
    id: 3,
    title: "Beef Biryani",
    price: "9.99",
    description: "Weekend exclusive biryani with special accompaniments",
  },
];

const FeaturedItems = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Items
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover our most popular and special dishes
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    ${item.price}
                  </span>
                  <Link
                    href={`/menu/${item.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
