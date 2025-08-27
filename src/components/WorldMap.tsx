import { useState } from "react";
import { siteConfig } from "@/config/site";

const WorldMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);

  const countryMarkers = [
    {
      name: "United States",
      x: "23%",
      y: "35%",
      color: "from-red-500 to-red-600",
    },
    {
      name: "United Kingdom",
      x: "48%",
      y: "28%",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Canada",
      x: "20%",
      y: "25%",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Australia",
      x: "80%",
      y: "75%",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Germany",
      x: "52%",
      y: "32%",
      color: "from-orange-500 to-orange-600",
    },
    { name: "France", x: "50%", y: "35%", color: "from-pink-500 to-pink-600" },
    { name: "Japan", x: "85%", y: "40%", color: "from-teal-500 to-teal-600" },
    {
      name: "India",
      x: "72%",
      y: "50%",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      name: "Brazil",
      x: "35%",
      y: "70%",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      name: "South Africa",
      x: "55%",
      y: "80%",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-1 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8">
            <span className="text-purple-700 font-bold text-lg">
              🌍 Global Reach
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Assignment Experts Have Helped{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Students From The Following Countries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Interactive world map showing our global presence across 15+
            countries
          </p>
        </div>

        {/* Interactive World Map */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-3xl p-8 border-2 border-purple-200 overflow-hidden">
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {countryMarkers.map((country, index) => (
                <g key={`line-${index}`}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={country.x}
                    y2={country.y}
                    stroke="rgba(147, 51, 234, 0.3)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </g>
              ))}
            </svg>

            {/* World Map Container */}
            <div className="relative h-96 bg-gradient-to-br from-blue-800/50 to-purple-800/50 rounded-2xl overflow-hidden">
              {/* Country Markers */}
              {countryMarkers.map((country, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: country.x, top: country.y }}
                  onMouseEnter={() => setHoveredCountry(country.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                >
                  {/* Pulsing outer ring */}
                  <div
                    className={`absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r ${country.color} opacity-30 animate-ping`}
                  ></div>

                  {/* Main marker */}
                  <div
                    className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${country.color} shadow-lg animate-pulse flex items-center justify-center`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  {/* Country name tooltip */}
                  {hoveredCountry === country.name && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-purple-200 whitespace-nowrap z-10">
                      <div className="text-sm font-semibold text-gray-800">
                        {country.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        150+ Students Helped
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/95"></div>
                    </div>
                  )}
                </div>
              ))}

              {/* Center hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse shadow-2xl flex items-center justify-center">
                    <div className="text-white font-bold text-sm">HQ</div>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold animate-pulse">15+</div>
              <div className="text-purple-100">Countries Served</div>
            </div>
            <div className="space-y-2">
              <div
                className="text-4xl font-bold animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                2.5K+
              </div>
              <div className="text-purple-100">Students Helped</div>
            </div>
            <div className="space-y-2">
              <div
                className="text-4xl font-bold animate-pulse"
                style={{ animationDelay: "1s" }}
              >
                80+
              </div>
              <div className="text-purple-100">Universities Covered</div>
            </div>
            <div className="space-y-2">
              <div
                className="text-4xl font-bold animate-pulse"
                style={{ animationDelay: "1.5s" }}
              >
                24/7
              </div>
              <div className="text-purple-100">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
