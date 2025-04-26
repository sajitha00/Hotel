import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";

const About = () => {
  return (
    <div className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="flex gap-6">
          <img
            src={one}
            alt="About Image 1"
            className="w-1/2 h-60 object-cover rounded-lg shadow-md"
          />
          <img
            src={two}
            alt="About Image 2"
            className="w-1/2 h-60 object-cover rounded-lg shadow-md"
          />
        </div>
        <div>
          <img
            src={three}
            alt="About Image 3"
            className="w-full h-60 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="text-orange-500 font-semibold tracking-widest mb-2">
          A BIT
        </h3>
        <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Welcome to Paradise Hotel, your luxury escape nestled in the vibrant
          coastal town of Hikkaduwa, Sri Lanka. Known for its golden beaches,
          rich culture, and tropical charm, our hotel offers an unforgettable
          retreat where relaxation meets elegance.
          <br />
          <br />
          At Paradise Hotel, we are proud to deliver exceptional hospitality,
          world-class amenities, and personalized service. Our mission is to
          create a perfect blend of comfort, style, and natural beauty — whether
          you're traveling for leisure, romance, or adventure.
          <br />
          <br />
          Indulge in our spacious luxury rooms, savor delicious cuisine crafted
          by top chefs, and experience the warmth of genuine Sri Lankan
          hospitality. From breathtaking sunsets to memorable experiences, every
          moment at Paradise Hotel is designed to leave you with lasting
          memories.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
