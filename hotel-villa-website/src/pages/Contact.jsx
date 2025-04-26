import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Contact Us
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-start max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Let's talk with us
            </h3>
            <p className="text-gray-600">
              For reservations, queries, or feedback — we're here to make your
              Paradise stay unforgettable.
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>📍 123 Paradise Beach Road, Hiikaduwa, Srilanka</p>
            <p>📞 +94 77 123 4567</p>
            <p>✉️ contact@paradisehotel.com</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 border rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />

            <textarea
              placeholder="Your message..."
              className="w-full p-4 border rounded-2xl shadow-sm h-32 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Location</h3>
      </div>

      <div className="mt-16">
        <iframe
          title="Paradise Hotel Hikkaduwa Location"
          src="https://maps.google.com/maps?&q=6.1408,80.0982&z=14&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Contact;
