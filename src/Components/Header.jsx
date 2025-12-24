export default function Header() {
  return (
    <header
      className="flex items-center justify-between px-10 py-6"
      style={{ backgroundColor: "#062F33" }}
    >
      {/* LOGO */}

      <div className="flex items-center">
        <a
          href="/"
          className="text-white text-2xl md:text-3xl transition-opacity duration-300 hover:opacity-90"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            letterSpacing: "0.5px",
            textDecoration: "none",
          }}
        >
          Faisal Qutbee
        </a>
      </div>


      {/* NAV */}
      <nav className="hidden md:flex gap-10 text-lg">
        {["Home", "About", "Advisory", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="transition-colors duration-200"
            style={{ color: "#B7D1D4" }}
            onMouseEnter={(e) => (e.target.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.target.style.color = "#B7D1D4")}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* CTA BUTTON */}
      <button
        className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
        style={{
          backgroundColor: "#6EE7B7",
          color: "#062F33",
        }}
      >
        Contact us
      </button>
    </header>
  );
}
