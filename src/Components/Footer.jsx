export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      
      {/* GREEN GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[120px]" />
      </div>

      {/* TOP DIVIDER */}
      <div className="w-full h-[2px] bg-white/20" />

      <div className="relative z-10 py-8 flex flex-col items-center justify-center gap-4">

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Faisal Qutbee. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href="#"
            className="text-gray-300 hover:text-green-500 transition-colors"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-green-500 transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-green-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-green-500 transition-colors"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}
