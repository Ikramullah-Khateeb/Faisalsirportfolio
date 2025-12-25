import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Advisory() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll-linked motion (reversible)
  const xLeft = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const yStatsSlow = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yStatsFast = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center py-12 md:py-20 lg:py-28"
    >
      {/* GREEN CENTER GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] bg-green-500/20 rounded-full blur-[100px] md:blur-[150px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-14 items-center">

          {/* LEFT CONTENT */}
          <motion.div style={{ x: xLeft }} className="text-center lg:text-left">

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 mb-4 md:mb-6 bg-green-500/10 border border-green-500/30 rounded-full"
            >
              <span className="text-green-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Business and Advisory Consulting
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              REAL Growth.
              <br />
              <span className="text-green-400">Strategic Impact.</span>
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 lg:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              With experience in large-scale government projects across the UAE,
              I offer business advisory and consulting services to individuals
              and organizations looking to establish or expand their presence
              in the Middle East. Whatever industry you come from, I am here to
              support you at every step.
            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 md:py-4 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm md:text-base"
              >
                Book a call
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

            {/* TOP CARD */}
            <motion.div
              style={{ y: yStatsFast }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="sm:col-span-2 p-6 md:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md border border-green-500/20 text-white shadow-xl"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400">
                $100M+
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-300">
                Large-Scale Projects Worth
              </p>
            </motion.div>

            {/* LEFT CARD */}
            <motion.div
              style={{ y: yStatsSlow }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-5 md:p-7 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md border border-green-500/20 text-white shadow-xl"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">
                8+
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Industries Worked Across
              </p>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              style={{ y: yStatsSlow }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="p-5 md:p-7 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md border border-green-500/20 text-white shadow-xl"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">
                7+
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300">
                Countries Served
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FLOATING DECOR */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="hidden lg:block absolute top-20 right-20 w-16 h-16 bg-green-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="hidden lg:block absolute bottom-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
      />
    </section>
  );
}
