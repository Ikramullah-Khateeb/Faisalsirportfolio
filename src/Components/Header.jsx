import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6">

        {/* LOGO */}
        <a
          href="/"
          className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold italic tracking-wide hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Faisal Qutbee
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-8 xl:gap-10 text-base xl:text-lg">
          {["Home", "About", "Advisory", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <button className="hidden md:block px-5 lg:px-7 py-2.5 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition-all hover:scale-105">
          Contact us
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-white hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black border-t border-white/10`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-3">
          {["Home", "About", "Advisory", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="py-2 text-base text-gray-300 hover:text-white transition-colors border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* MOBILE CTA */}
          <button
            className="mt-4 w-full px-6 py-3 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-400 transition-all"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact us
          </button>
        </nav>
      </div>
    </header>
  );
}
