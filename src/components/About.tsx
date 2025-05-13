const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative h-64 lg:h-96 mb-8 lg:mb-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg">
              {/* Placeholder for restaurant image */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                Restaurant Image
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Founded in 2010, Karachi Biryani has been serving authentic
              Pakistani cuisine to food lovers across the city. Our recipes have
              been passed down through generations, ensuring that every dish
              maintains the rich flavors and traditions of Karachi.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-600">
                  Authentic Taste
                </h3>
                <p className="mt-2 text-gray-600">
                  Traditional recipes with premium ingredients
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-600">
                  Fresh Daily
                </h3>
                <p className="mt-2 text-gray-600">
                  Made fresh every day with care
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-600">
                  Family Recipe
                </h3>
                <p className="mt-2 text-gray-600">
                  Secret family recipes passed down generations
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-600">
                  Best Quality
                </h3>
                <p className="mt-2 text-gray-600">
                  Using only the finest ingredients available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
