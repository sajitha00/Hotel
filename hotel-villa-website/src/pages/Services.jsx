import React from "react";
import food from "../assets/food.jpg";
import room from "../assets/room.jpg";
import air from "../assets/airport1.jpg";
import pool from "../assets/pool.jpg";
import spa from "../assets/spa.webp";
import luxroom from "../assets/luxroom.jpg";

const services = [
  {
    title: "Fine Dining Buffet",
    description:
      "Enjoy gourmet meals with a wide variety of local and international dishes in our elegant buffet restaurant.",
    image: food,
  },
  {
    title: "Room Service 24/7",
    description:
      "Relax and let us bring delicious meals, drinks, and amenities straight to your luxury room, anytime you desire.",
    image: room,
  },
  {
    title: "Spa & Wellness",
    description:
      "Unwind with our rejuvenating spa treatments, massages, and wellness therapies designed to refresh your soul.",
    image: spa,
  },
  {
    title: "Airport Shuttle",
    description:
      "Travel hassle-free with our private airport shuttle services available for all guests.",
    image: air,
  },
  {
    title: "Swimming Pool",
    description:
      "Dive into our stunning outdoor pools, surrounded by tropical gardens and luxurious lounging areas.",
    image: pool,
  },
  {
    title: "Luxury Rooms & Suites",
    description:
      "Experience the ultimate comfort with beautifully designed rooms offering breathtaking views and modern amenities.",
    image: luxroom,
  },
];

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-primary font-semibold hover:underline">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
