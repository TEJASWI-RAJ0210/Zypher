import React, { useState } from "react";

const templates = [
  {
    name: "Serene Escape",
    image: "temp1.jpg",
    theme: "bg-gradient-to-b from-blue-200 to-white",
    button: "bg-green-200 text-gray-800",
    weather: "☀️ 28°C",
    duration: "12 MAR - 20 MAR, 2025",
    route: "Lake → Forest → Spa → Hotel",
    visibility: "Excellent",
    traffic: "Low by 9 AM",
    description: "Relax by tranquil lakes and lush forests.",
  },
  {
    name: "Bold Adventurer",
    image: "temp2.jpg",
    theme: "bg-gradient-to-b from-red-200 to-white",
    button: "bg-gray-200 text-gray-800",
    weather: "🌦️ 18°C",
    duration: "5 APR - 12 APR, 2025",
    route: "Mountain → River → Camp → Base",
    visibility: "Good",
    traffic: "Moderate by 8 AM",
    description: "Conquer mountains and rivers on this action-packed trip.",
  },
  {
    name: "Urban Wanderer",
    image: "temp3.jpg",
    theme: "bg-gradient-to-b from-blue-900 to-white text-white",
    button: "bg-gray-700 text-white",
    weather: "🌤️ 22°C",
    duration: "15 MAY - 22 MAY, 2025",
    route: "Downtown → Museum → Cafe → Hotel",
    visibility: "Clear",
    traffic: "Heavy by 10 AM",
    description: "Explore vibrant city life and hidden gems.",
  },
  {
    name: "Pastel Dreamer",
    image: "temp4.jpg",
    theme: "bg-gradient-to-b from-pink-100 to-white",
    button: "bg-yellow-200 text-gray-800",
    weather: "🌸 25°C",
    duration: "1 JUN - 7 JUN, 2025",
    route: "Garden → Art Walk → Boutique → Loft",
    visibility: "Good",
    traffic: "Light by 11 AM",
    description: "Enjoy pastel gardens and artistic escapes.",
  },
  {
    name: "Beach Breeze",
    image: "temp5.jpg",
    theme: "bg-gradient-to-b from-yellow-100 to-white",
    button: "bg-blue-200 text-gray-800",
    weather: "🌊 32°C",
    duration: "10 JUL - 17 JUL, 2025",
    route: "Beach → Boardwalk → Resort → Spa",
    visibility: "Excellent",
    traffic: "Low by 8 AM",
    description: "Soak up the sun and sea on golden beaches.",
  },
];

const TemplatesSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const scrollLeft = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const scrollRight = () => {
    if (startIndex < templates.length - 3) setStartIndex(startIndex + 1);
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-b from-pink-100 to-pink-300 text-gray-900"
      style={{ backgroundImage: "url('/template.jpg')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-stone-600">Check out our</p>
        <h2 className="text-4xl font-bold mb-2 text-stone-800">Templates</h2>
        <p className="mb-10 text-stone-800">
          Pick from mood-based templates designed to match your travel style.
        </p>

        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            disabled={startIndex === 0}
            className={`absolute left-0 z-10 bg-white rounded-full p-2 shadow-md transition ${
              startIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            ←
          </button>

          <div className="flex gap-4 sm:gap-6 mx-auto overflow-x-auto md:overflow-hidden">
            {templates.slice(startIndex, startIndex + 3).map((template, idx) => (
              <div
                key={startIndex + idx}
                className={`rounded-3xl w-72 p-4 ${template.theme} shadow-xl flex flex-col items-center`}
              >
                <div
                  className="w-full h-40 rounded-xl bg-cover bg-center mb-4"
                  style={{
                    backgroundImage: `url('${template.image || "/template.jpg"}')`,
                  }}
                ></div>
                <h3 className="text-lg font-semibold mb-1">{template.name}</h3>
                <div className="text-sm mb-2">
                  <p className="mb-1">{template.description}</p>
                  <p>Weather insights</p>
                  <p className="text-lg">{template.weather}</p>
                  <p className="text-xs">Trip Duration</p>
                  <p className="text-xs">{template.duration}</p>
                  <p className="text-xs">Travel to</p>
                  <p className="text-xs">{template.route}</p>
                  <p className="text-xs">Visibility: {template.visibility}</p>
                  <p className="text-xs mt-1">Traffic by {template.traffic}</p>
                </div>
                <button className={`mt-auto px-4 py-1 rounded-xl text-sm font-medium ${template.button}`}>
                  Try now
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            disabled={startIndex >= templates.length - 3}
            className={`absolute right-0 z-10 bg-white rounded-full p-2 shadow-md transition ${
              startIndex >= templates.length - 3 ? "opacity-30 cursor-not-allowed" : ""
            }`}
          >
            →
          </button>
        </div>

        <button className="mt-10 px-6 py-3 bg-gray-800 text-white rounded-xl font-medium shadow-lg hover:bg-gray-700 transition">
          Generate Trip Plan
        </button>
      </div>
    </section>
  );
};

export default TemplatesSection;
