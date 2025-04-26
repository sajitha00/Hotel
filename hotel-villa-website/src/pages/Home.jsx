import React from "react";
import hotelImage from "../assets/Hotel.jpg";

const Home = () => {
  return (
    <div className="font-sans ">
      <section className="grid md:grid-cols-2 gap-8 bg-white items-center px-6 md:px-16 py-12">
        <div className="space-y-6">
          <h2 className="text-green-700 text-xl font-semibold">
            Paradise View Hotel
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Escape to a World of Tranquility and Luxury
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Discover the perfect blend of breathtaking ocean views, tropical
            gardens, and world-class hospitality. Every stay at Paradise View is
            an unforgettable journey into comfort, elegance, and serenity.
            <br />
            <br />
            Located in the vibrant coastal town of Hikkaduwa, Sri Lanka, our
            hotel is a sanctuary of relaxation, offering spacious luxury rooms,
            personalized services, and unforgettable culinary experiences. Wake
            up to the sound of gentle waves, savor gourmet dishes crafted by top
            chefs, and enjoy a stay where every detail is designed for your
            delight.
          </p>

          <div className="flex gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition duration-300">
              Book Now
            </button>

            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md transition duration-300">
              ▶️ Take a Tour
            </button>
          </div>
        </div>

        <div>
          <img
            src={hotelImage}
            alt="Hotel Paradise View"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
