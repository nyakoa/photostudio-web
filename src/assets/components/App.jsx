import React from "react";
import {
  FaClock,
  FaImages,
  FaPrint,
  FaCalendarAlt,
  FaGift,
} from "react-icons/fa";

export default function App() {
  const packages = [
    {
      title: "Portrait Memories",
      desc: "30 minutes to capture your smile forever.",
      price: "Ksh 3,500",
      items: [
        { text: "30-minute session", icon: <FaClock /> },
        { text: "8 edited photos", icon: <FaImages /> },
        { text: "Online gallery", icon: <FaCalendarAlt /> },
      ],
      highlight: true,
      ribbon: "Most Popular",
    },
    {
      title: "Life’s Moments",
      desc: "Extended sessions for family, couples, or events.",
      price: "Ksh 7,500",
      items: [
        { text: "3-hour session", icon: <FaClock /> },
        { text: "30 edited photos", icon: <FaImages /> },
        { text: "Prints on request", icon: <FaPrint /> },
      ],
      highlight: false,
    },
    {
      title: "Weddings & Stories",
      desc: "Full-day coverage to immortalize your wedding day.",
      price: "Ksh 15,000",
      items: [
        { text: "Full-day coverage", icon: <FaClock /> },
        { text: "200+ edited photos", icon: <FaImages /> },
        { text: "Album & USB", icon: <FaGift /> },
      ],
      highlight: false,
    },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      caption: "Portrait: Joyful Moment",
    },
    {
      src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=800&q=80",
      caption: "Couple Shoot: Sunset Vibes",
    },
    {
      src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      caption: "Outdoor: Pure Happiness",
    },
    {
      src: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=800&q=80",
      caption: "Wedding: Emotional Exchange",
    },
    {
      src: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
      caption: "Portrait: Candid Smile",
    },
    {
      src: "https://images.unsplash.com/photo-1534126511673-b6899657816fe1?auto=format&fit=crop&w=800&q=80",
      caption: "Family Shoot: Loving Moments",
    },
  ];

  const primaryColor = "#136978";

  return (
    <div className="min-h-screen font-sans bg-white text-black">
      {/* Header */}
      <header className="fixed w-full z-40 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="flex items-center justify-center text-white font-bold h-full">
                  ZP
                </div>
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-black">
                  Zuri Photography
                </div>
                <div className="text-xs text-gray-500">
                  Zimmerman • Portraits • Weddings • Events
                </div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#portfolio" className="hover:text-[#136978] transition">
                Portfolio
              </a>
              <a href="#packages" className="hover:text-[#136978] transition">
                Packages
              </a>
              <a href="#contact" className="hover:text-[#136978] transition">
                About
              </a>
              <a
                href="#contact"
                className="px-4 py-2 rounded-md font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center"
        style={{
          height: "92vh",
          backgroundImage:
            "linear-gradient(to top, rgba(128,128,128,0.4), rgba(128,128,128,0.1)), url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl px-6">
          <h1 className="font-serif font-extrabold text-4xl sm:text-6xl leading-tight mb-4 text-white animate-fade-in">
            Moments That Speak Louder Than Words
          </h1>
          <p className="text-lg sm:text-xl mb-6 font-sans text-white animate-fade-in delay-200">
            At Zuri Photography, every shot tells your story in perfect light.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-400">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-semibold font-sans text-white hover:opacity-90 transition"
              style={{ backgroundColor: primaryColor }}
            >
              Book a Session
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-full font-semibold font-sans border border-white text-white hover:bg-[#136978] transition"
            >
              View Gallery
            </a>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-black">
            Our Packages
          </h2>
          <p className="text-sm mb-8 font-sans text-gray-700">
            Clear, simple pricing tailored for portraits, events, and full-day
            coverage.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.title}
                className={`relative rounded-2xl p-6 shadow-md flex flex-col justify-between transition-transform transform hover:scale-105 ${
                  p.highlight
                    ? "bg-[#136978] text-white"
                    : "bg-white text-black border border-gray-200"
                }`}
              >
                {p.ribbon && (
                  <div className="absolute top-0 right-0 bg-white text-[#136978] px-3 py-1 rounded-bl-lg font-sans text-xs font-semibold">
                    {p.ribbon}
                  </div>
                )}
                <div>
                  <div className="font-serif font-bold text-2xl mb-2">
                    {p.title}
                  </div>
                  <div className="text-sm mb-4 font-sans">{p.desc}</div>
                  <ul className="mb-4 text-sm font-sans space-y-2">
                    {p.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span
                          className={`${
                            p.highlight ? "text-white" : "text-[#136978]"
                          }`}
                        >
                          {it.icon}
                        </span>
                        <span className={`${p.highlight ? "text-white" : ""}`}>
                          {it.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div
                    className={`font-bold text-lg ${
                      p.highlight ? "text-white" : `text-[${primaryColor}]`
                    }`}
                  >
                    {p.price}
                  </div>
                  <button
                    className={`px-4 py-2 rounded-full font-sans font-semibold transition-colors duration-300 ${
                      p.highlight
                        ? "bg-white text-[#136978] hover:opacity-90"
                        : `bg-[${primaryColor}] text-white hover:opacity-90`
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-6 text-black">
            Gallery
          </h2>
          <p className="text-sm mb-8 font-sans text-gray-700">
            A selection of recent shoots.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg shadow-sm bg-white group relative"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-2 text-black">
              Get in touch
            </h3>
            <p className="text-sm mb-4 font-sans text-gray-700">
              Ready to book or want a custom package? Message us on WhatsApp or
              visit the studio in Zimmerman.
            </p>
            <a
              href="https://wa.me/254700000000"
              className="inline-block px-5 py-3 rounded-full font-semibold text-white hover:opacity-90 transition"
              style={{ backgroundColor: primaryColor }}
            >
              Message on WhatsApp
            </a>
          </div>

          <form className="bg-white rounded-xl p-6 shadow-md">
            <label className="text-sm font-sans block mb-2 text-black">
              Name
            </label>
            <input
              className="w-full border rounded-md p-2 mb-3"
              placeholder="Your name"
            />
            <label className="text-sm font-sans block mb-2 text-black">
              Email or WhatsApp
            </label>
            <input
              className="w-full border rounded-md p-2 mb-3"
              placeholder="Email or WhatsApp number"
            />
            <label className="text-sm font-sans block mb-2 text-black">
              Message
            </label>
            <textarea
              className="w-full border rounded-md p-2 mb-3"
              rows={4}
              placeholder="Tell us about your shoot"
            ></textarea>
            <button
              className="px-4 py-2 rounded-full font-sans font-semibold hover:opacity-90 transition text-white"
              style={{ backgroundColor: primaryColor }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-700">
        © {new Date().getFullYear()} Zuri Photography — Zimmerman, Nairobi
      </footer>
    </div>
  );
}
