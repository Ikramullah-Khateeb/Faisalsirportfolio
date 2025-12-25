import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      
      {/* GREEN CENTER GLOW (same as Hero) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-green-500/20 rounded-full blur-[120px]" />
      </div>

      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-green-500/40" />

      <div className="relative z-10 custom-container py-28">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-20"
        >
          GET IN <span className="text-green-500">TOUCH</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT QUOTE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.9 }}
            className="p-10 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10"
          >
            <p className="text-xl md:text-2xl leading-relaxed italic text-white">
              Technology is not just a tool; it&apos;s the canvas on which we
              paint the future of business and humanity.
            </p>

            <p className="mt-6 text-sm uppercase tracking-wide text-gray-400">
              — Faisal Qutbee
            </p>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.9 }}
            className="p-10 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let’s Connect
            </h3>

            <form className="space-y-8">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/30 focus:border-green-500 outline-none py-3 text-white placeholder:text-gray-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-white/30 focus:border-green-500 outline-none py-3 text-white placeholder:text-gray-400"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full bg-transparent border-b border-white/30 focus:border-green-500 outline-none py-3 text-white placeholder:text-gray-400"
              />

              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent border-b border-white/30 focus:border-green-500 outline-none py-3 text-white placeholder:text-gray-400 resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-6 px-10 py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM DIVIDER (matches Hero) */}
      <div className="w-full h-[2px] bg-white/20 mt-20" />
    </section>
  );
}
